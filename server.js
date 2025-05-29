const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

app.use('/peerjs', peerServer);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`PeerJS server running on port ${port}`);
});
