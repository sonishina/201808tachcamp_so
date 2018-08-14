'use strict'

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end('こんにちは\n');
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
