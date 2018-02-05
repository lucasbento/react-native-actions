import WebSocket from 'ws';

import config from '../common/config.json';
import connections from './connections';

const server = () => {
  const server = new WebSocket.Server({ port: config.port });

  connections.setServer(server);

  return server;
};

export default server;
