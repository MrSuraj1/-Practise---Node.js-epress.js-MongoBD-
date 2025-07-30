const http = require('http');

const fs = require('fs');

const allHandler = require('./cal');

let server = http.createServer(allHandler);



let port=2001;

server.listen(port, () => {
    console.log(`your server run on http://localhost:${port}`);
})