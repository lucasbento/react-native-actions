import { Platform, NativeModules } from 'react-native';
import io from 'socket.io-client';

import config from './config';

const run = () => {
  if (Platform.OS === 'android') {
    return;
  }

  const { RNActions, DevMenu, DevSettings } = NativeModules; 

  RNActions.getHostUrl()
    .then((url) => {
      const socket = io(`http://${url}:${config.port}`);

      socket.on('action', ({ type }) => {
        if (type === 'reload') {
          return DevSettings.reload();
        }

        if (type === 'openDevMenu' && Platform.OS === 'ios') {
          return DevMenu.show();
        }
      });
    });
}

run();
