import { app, globalShortcut } from 'electron';

import buildTray from './tray';
import COMMANDS, { handleCommand } from './commands';
import server from './server';

// eslint-disable-next-line no-unused-vars
app.on('ready', async () => {
  await server();

  buildTray();

  Object.keys(COMMANDS).forEach(key =>
    globalShortcut.register(key, handleCommand({ key })));
});
