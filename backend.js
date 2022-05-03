const readline = require('readline');

const http = require('http');
const WebSocketServer = require('websocket').server;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const server = http.createServer();
const port   = 9898

const wsServer = new WebSocketServer({
  httpServer: server
});

// Server
server.listen(port);

// Handlers
connection = null

wsServer.on('request', function(request) {
  connection = request.accept(null, request.origin);
});

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    connection.sendUTF(`${str}`)

    console.log(`You pressed the "${str}" key`);
    console.log();
    console.log(key);
    console.log();
  }
});
