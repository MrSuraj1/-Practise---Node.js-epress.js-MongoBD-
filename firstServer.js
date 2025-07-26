const http = require('http');


let server = http.createServer((req,res) => {
 console.log(req);
});

server.listen(3000);
