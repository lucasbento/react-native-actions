let connections = [];

export default {
  addConnection: connection => connections.push(connection),
  removeConnection: (connection) => {
    connections = connections.filter(c => c !== connection);
  },
  getConnections: () => connections,
};
