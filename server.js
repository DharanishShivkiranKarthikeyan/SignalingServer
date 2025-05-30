// server.js
const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

// Test route for checking server status
app.get('/', (req, res) => {
  res.send('PeerJS Signaling Server is Running! ✅');
});

// Mount PeerJS routes
app.use('/peerjs', peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});
