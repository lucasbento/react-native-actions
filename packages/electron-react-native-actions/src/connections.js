let server = null;

export default {
  setServer: wss => server = wss,
  getConnections: () => server.clients,
};
