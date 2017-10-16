import { Platform, NativeModules } from 'react-native';
import io from 'socket.io-client';

import config from './common/config';

const run = () => {
  // Android is handled through adb
  if (Platform.OS === 'android') {
    return;
  }

  const { RNActions, DevMenu, DevSettings } = NativeModules;

  const COMMANDS = {
    reload: DevSettings.reload,
    openDevMenu: DevMenu.show,
  };

  RNActions.getHostUrl()
    .then((url) => {
      const socket = io(`${url}:${config.port}`);

      socket.on('action', ({ type }) => COMMANDS[type]());
    });
}

run();
