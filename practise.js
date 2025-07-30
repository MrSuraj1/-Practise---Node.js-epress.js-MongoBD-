const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url.toLowerCase() === "/home") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Hi - Home Page</h1></body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url.toLowerCase() === "/oo") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>oo</title></head>');
    res.write('<body><h1>Hi - oo Page</h1></body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url.toLowerCase() === "/ooo") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>ooo</title></head>');
    res.write('<body><h1>Hi - ooo Page</h1></body>');
    res.write('</html>');
    return res.end();
  }

  // Default route: /
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Welcome</title></head>');
  res.write('<body>');
  res.write(`
    <h1>Welcome</h1>
    <div style="display: flex; justify-content: space-between;">
      <div><strong>Logo/Left</strong></div>
      <div>
        <a href="/home">Home</a> |
        <a href="/oo">Ghar</a> |
        <a href="/ooo">Ghar 2</a>
      </div>
    </div>
  `);
  res.write('</body>');
  res.write('</html>');
  return res.end();
});

const port = 3000;
server.listen(port, (err) => {
  if (err) console.error("Server failed to start");
  else console.log(`Server running on http://localhost:${port}`);
});
