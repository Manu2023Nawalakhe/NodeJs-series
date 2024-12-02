const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);
  // Check the requested URL
  if (req.url === "/") {
    res.end("Hello from the Home side");
  } else if (req.url === "/about") {
    res.end("Hello from the aboutUs side");
  } else if (req.url === "/contact") {
    res.end("Hello from the contactUs side");
  } else if (req.url === "/userapi") {
    // fs.readFile(`${__dirname}/userapi/userapi.json`, "utf-8", (err, data) => {
    //   console.log(data);
    //res.end(data);
    //   const objData = JSON.parse(data);
    //   res.end(objData[0].name);
    //   console.log(err);
    //});
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[2].name);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 error: page doesn't exist</h1>");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening on port 5000");
});
