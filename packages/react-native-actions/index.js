import { NativeModules } from 'react-native';
import io from 'socket.io-client';

import config from './config';

const { RNActions, DevMenu, DevSettings } = NativeModules; 

const run = () => {
  const hostUrl = RNActions.getHostUrl()
    .then((url) => {
      const socket = io(`${url}:${config.port}`);

      socket.on('action', ({ type }) => {
        if (type === 'reload') {
          return DevSettings.reload();
        }

        if (type === 'openDevMenu') {
          return DevMenu.open();
        }
      });
    });
};

run();
