const http = require('http');
const PORT = 3000;
CONST server = http.createserver((req, res) => {
res.writehead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World From Skills It !!!\n');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
