// The http.CreateServer() method includes request and response parameters which is supplie

// The request object can be used to get information about the current HTTP request
// e.g.,url, request header, and data.

// The response object can be used to send a response for current HTTP request

//If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.end("Hello from the other sides");
// });

// server.listen(5000, "127.0.0.1", () => {
//   console.log("listening to the port no 8000");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  // Check the requested URL
  if (req.url === "/") {
    res.end("Hello from the Home side");
  } else if (req.url === "/about") {
    res.end("Hello from the aboutUs side");
  } else if (req.url === "/contact") {
    res.end("Hello from the contactUs side");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 error: page doesn't exist</h1>");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening on port 5000");
});
