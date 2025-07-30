const { URLSearchParams } = require("url");
const fs = require('fs');

let cal = (req, res) => {
  let body = [];

  // ✅ Listen on req (not res)
  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    let para = Buffer.concat(body).toString();

    // ✅ Correct constructor usage
    let params = new URLSearchParams(para);
    let bodyObject = Object.fromEntries(params);

    // ✅ Parse input as numbers and calculate
    const num1 = Number(bodyObject.num1);
    const num2 = Number(bodyObject.num2);
    const result = num1 + num2;

    console.log('Result:', result);

    // ✅ Write result to file
    fs.writeFile('add.txt', JSON.stringify(bodyObject), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      }
    });

    // ✅ Respond to client
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/">Go Back</a>
        </body>
      </html>
    `);
  });
};

module.exports = { cal };  