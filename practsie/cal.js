const { cal } = require('./cal-res');

let allHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Home</title></head>
        <body>
          <h1>Welcome to home page</h1>
          <a href="/cal">Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url === '/cal-res' && req.method === 'POST') {
    return cal(req, res);
  }

  else if (req.url === '/cal') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Calculator</h1>
          <form action="/cal-res" method="POST">
            <label>1st number:</label><br>
            <input type="number" name="num1"><br><br>
            
            <label>2nd number:</label><br>
            <input type="number" name="num2"><br><br>
            
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  else {
    // 404 Fallback
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Not Found</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
        </body>
      </html>
    `);
    return res.end();
  }
};

module.exports = allHandler;
