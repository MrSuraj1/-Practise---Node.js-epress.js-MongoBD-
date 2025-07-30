const http = require('http');
const { text } = require('stream/consumers');


let server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>hello </head>');
        res.write('<body>Ask my anything </body>');
        res.write('</html>')
        return res.end();

    }
    else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>hello </head>');
        res.write('<body><h1> i am mad engineer </h1></body>');
        res.write('</html>')
        res.end();

    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>hello </head>');
        res.write('<body><h1> kya chahiye tujhe </h1></body>');
        res.write('</html>')
        return res.end();
    }





});


const port = 3000;

server.listen(port, () => {
    console.log(` you server running on  http://localhost:${port} `);
});