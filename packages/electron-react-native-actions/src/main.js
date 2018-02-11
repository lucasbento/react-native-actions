import { app, globalShortcut } from 'electron';
import settings from 'electron-settings';

import buildTray from './tray';
import COMMANDS, { handleCommand } from './commands';
import server from './server';
import { autoLauncher } from './utils';

// eslint-disable-next-line no-unused-vars
app.on('ready', async () => {
  await server();

  settings.set('openAtLogin', await autoLauncher.isEnabled());

  buildTray();

  Object.keys(COMMANDS).forEach(key =>
    globalShortcut.register(key, handleCommand({ key })));
});
