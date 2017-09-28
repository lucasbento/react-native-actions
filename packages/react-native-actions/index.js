import { NativeModules } from 'react-native';
import io from 'socket.io-client';

import config from './config';

const { RNActions } = NativeModules;

const run = () => {
  const socket = io(`http://localhost:${config.port}`);

  socket.on('action', ({ type }) => {
    if (type === 'reload') {
      RNActions.reload();
    }
  });
};

run();
