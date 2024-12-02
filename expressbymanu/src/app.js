import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("hello world from the manisha");
});

app.get("/about", (req, res) => {
  res.send("hello world from the About");
});

app.listen(8000, () => {
  console.log("Listening the port at 8000");
});

// The callback function has 2 parameters, request(req) and response (res)
// The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body,
// HTTP headers,etc.

//Similarly, the responce object represnts the HTTP response
//that the Express app sends when it receives an HTTP request
// when we create a file with capital latter that time we can't use -y in npm init
