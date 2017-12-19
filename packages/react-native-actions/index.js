import React, { Component } from 'react';
import { Platform, NativeModules } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Toast from 'react-native-easy-toast';
import io from 'socket.io-client';

import config from './common/config';

const DEFAULT_XMLHTTPREQUEST = GLOBAL.XMLHttpRequest;
const isDev = __DEV__;

const withActions = (WrappedComponent) => {
  class RNActions extends Component {
    state = {
      isShowRequestEnabled: false,
    };
  
    componentWillMount() {
      this.handleMount();
    }
  
    componentWillUnmount() {
      this.handleUnmount();
    }
  
    toggleShowRequest = () =>
      this.setState(({ isShowRequestEnabled }) => ({
        isShowRequestEnabled: !isShowRequestEnabled,
      }), () => {
        const toastMessage = this.state.isShowRequestEnabled ?
          'Enabled showing requests in console' :
          'Disabled showing requests in console';

        this.toast.show(toastMessage);

        GLOBAL.XMLHttpRequest = this.state.isShowRequestEnabled ?
          GLOBAL.originalXMLHttpRequest :
          DEFAULT_XMLHTTPREQUEST;
      });
  
    handleMount = () => {
      if (!isDev) {
        return;
      }
  
      const { RNActions: NativeRNActions } = NativeModules;
  
      NativeRNActions.getHostUrl()
        .then(this.handleSetupSocket);
    };
  
    handleSetupSocket = (url) => {
      const { DevMenu, DevSettings } = NativeModules;
  
      this.socket = io(`${url}:${config.port}`);
  
      const COMMANDS = {
        ...Platform.select({
          ios: {
            reload: DevSettings.reload,
            openDevMenu: DevMenu.show,
          },
          android: {},
        }),
        toggleShowRequest: this.toggleShowRequest,
      };
  
      this.socket.on('action', ({ type }) => COMMANDS[type]());
    };
  
    handleUnmount = () => this.socket.disconnect();
  
    render() {
      if (isDev) {
        return [
          <Toast
            key="toast"
            ref={ref => this.toast = ref}
          />,
          <WrappedComponent
            key="main"
            {...this.props}
          />,
        ];
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(RNActions, WrappedComponent);
};

export default withActions;
