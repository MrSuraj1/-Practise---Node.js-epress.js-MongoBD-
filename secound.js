
const fs = require('fs');
const { buffer } = require('stream/consumers');


const bod = [];

let handler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/know') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head>hello </head><body>Ask me anything</body></html>');
    return res.end();
  }

  else if (req.url.toLowerCase() === '/about' && req.method === 'POST') {

    req.on('data' , chunk => {
      console.log(chunk);
      bod.push(chunk);
    })

    req.on('end' , ()=> {
      const pras = Buffer.concat(bod).toString();
      console.log(pras);
   //   const bodyObject = {}
     let Params = new URLSearchParams(pras);
  //    for (const [key,value] of Params.entries()){
    //    bodyObject[key] = value;
  //    }

     let bodyObject=Object.fromEntries(Params)
      console.log(bodyObject);

     fs.writeFileSync('save.txt', JSON.stringify(bodyObject));
    })
    
    
    res.statusCode = 302;
    res.setHeader('Location', '/know');
    return res.end();
  }

  else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head>hello </head><body><h1>I am mad engineer</h1></body></html>');
    return res.end();
  }

  else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Form</title></head><body>');
    res.write('<h2>This is a Node.js form</h2>');
    res.write('<form action="/about" method="POST">');
    res.write('<label>Name:</label><br>');
    res.write('<input type="text" name="name" placeholder="Enter name"><br>');
    res.write('<label>Phone:</label><br>');
    res.write('<input type="text" name="phone1" placeholder="Enter phone"><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form></body></html>');
    return res.end();
  }
};

module.exports = handler; 