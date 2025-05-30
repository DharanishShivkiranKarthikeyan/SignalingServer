const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs',
  key: 'peerjs',
  corsOptions: {
    origin: '*'
  }
});

app.use('/peerjs', peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`PeerJS signaling server running on port ${PORT}`);
});
