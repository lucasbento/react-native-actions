import { app, globalShortcut } from 'electron';
import WebSocket from 'ws';

import buildTray from './tray';
import config from '../common/config.json';
import COMMANDS, { handleCommand } from './commands';
import connections from './connections';

// eslint-disable-next-line no-unused-vars
let tray = null;

app.on('ready', () => {
  tray = buildTray();

  const wss = new WebSocket.Server({ port: config.port });
  wss.on('connection', (ws) => {
    connections.addConnection(ws);

    ws.on('close', () =>
      connections.removeConnection(ws));

    Object.keys(COMMANDS).forEach(key =>
      globalShortcut.register(key, handleCommand({ key, ws })));
  });
});
