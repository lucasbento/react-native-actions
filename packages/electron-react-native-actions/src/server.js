import WebSocket from 'ws';

import config from '../common/config.json';
import connections from './connections';
import { rebuildTrayMenu } from './tray';

const server = () => {
  const wss = new WebSocket.Server({ port: config.port });

  wss.on('connection', (ws) => {
    rebuildTrayMenu();

    ws.on('close', () => rebuildTrayMenu());
  });

  connections.setServer(server);

  return Promise.resolve(server);
};

export default server;
