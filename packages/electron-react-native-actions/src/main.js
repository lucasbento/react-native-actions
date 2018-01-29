import { app, globalShortcut } from 'electron';
import debug from 'electron-debug';
import spawn from 'child_process';
import http from 'http';
import io from 'socket.io';

import menu, { RELOAD_HOTKEY } from './menu';

const COMMANDS = {
  [RELOAD_HOTKEY]: {
    socket: 'reload',
    shell: 'adb shell input text "RR"',
  },
};
// }, {
//   trigger: 'extension.RNOpenDevMenu',
//   action: {
//     socket: 'openDevMenu',
//     shell: 'adb shell input keyevent 82',
//   },
// }, {
//   trigger: 'extension.RNToggleShowRequest',
//   action: 'toggleShowRequest',
// }];

debug({ showDevTools: true });

app.on('ready', () => {
  menu();

  const server = http.createServer();
  const socket = io(server, { pingTimeout: 30000 });

  server.listen(4444);

  globalShortcut.register(RELOAD_HOTKEY, () => {
    socket.emit('action', {
      type: COMMANDS[RELOAD_HOTKEY].socket,
    });

    spawn.exec(COMMANDS[RELOAD_HOTKEY].shell);
  });
});
