import WebSocket from 'ws';

import config from '../common/config.json';
import connections from './connections';
import { rebuildTrayMenu } from './tray';

const server = () => {
  const server = new WebSocket.Server({ port: config.port });

  server.on('connection', (ws, req) => {
    console.log('new connection');
    rebuildTrayMenu();
  
    ws.on('close', () => rebuildTrayMenu());

    // console.log('ws', ws);
    // console.log('req', req);
  });

  connections.setServer(server);

  return Promise.resolve(server);
};

export default server;
