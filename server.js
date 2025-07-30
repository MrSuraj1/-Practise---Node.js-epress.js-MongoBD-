const http = require("http");

const handler = require('./secound');

let server = http.createServer(handler);



const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


