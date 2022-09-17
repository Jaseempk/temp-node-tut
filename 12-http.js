const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("there is nothng to show show abbout us");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>the page you are looking for is not available</p>
    <a href="/">home</a>
    `);
});
server.listen(5000);
