import React, { Component } from 'react';
import { Platform, NativeModules } from 'react-native';
import Sockette from 'sockette';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Toast from 'react-native-easy-toast';

import config from './common/config.json';

const { RNActions: NativeRNActions } = NativeModules;

const DEFAULT_XMLHTTPREQUEST = GLOBAL.XMLHttpRequest;
const isDev = __DEV__; // eslint-disable-line no-undef
const isIOS = Platform.OS === 'ios';

const withActions = (WrappedComponent) => {
  class RNActions extends Component {
    state = {
      isShowRequestsEnabled: false,
    };

    componentWillMount() {
      this.handleMount();
    }

    componentWillUnmount() {
      this.handleUnmount();
    }

    toggleShowRequests = () =>
      this.setState(({ isShowRequestsEnabled }) => ({
        isShowRequestsEnabled: !isShowRequestsEnabled,
      }), () => {
        const toastMessage = this.state.isShowRequestsEnabled ?
          'Enabled showing requests in console' :
          'Disabled showing requests in console';

        this.toast.show(toastMessage);

        GLOBAL.XMLHttpRequests = this.state.isShowRequestsEnabled ?
          GLOBAL.originalXMLHttpRequests :
          DEFAULT_XMLHTTPREQUEST;
      });

    handleMount = () => {
      if (!isDev) {
        return;
      }

      NativeRNActions.getHostUrl()
        .then(this.handleSetupSocket);
    };

    handleSetupSocket = (url) => {
      const { DevMenu, DevSettings } = NativeModules;

      const COMMANDS = {
        reload: () => {
          this.handleUnmount();

          return isIOS ? DevSettings.reload() : NativeRNActions.reload();
        },
        openDevMenu: isIOS ? DevMenu.show : NativeRNActions.openDevMenu,
        showRequests: this.toggleShowRequests,
      };

      this.socket = new Sockette(`${url}:${config.port}`, {
        timeout: 5e3,
        maxAttempts: 10,
        onmessage: ({ data: type }) => COMMANDS[type] && COMMANDS[type](),
      });
    };

    handleUnmount = () =>
      this.socket.close();

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
