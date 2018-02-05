import { app, globalShortcut } from 'electron';

import buildTray from './tray';
import COMMANDS, { handleCommand } from './commands';
import server from './server';

// eslint-disable-next-line no-unused-vars
let tray = null;

app.on('ready', () => {
  server();

  tray = buildTray();

  Object.keys(COMMANDS).forEach(key =>
    globalShortcut.register(key, handleCommand({ key })));
});
