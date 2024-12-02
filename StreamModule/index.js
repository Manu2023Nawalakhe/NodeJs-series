const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("index.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });
  // 2nd way
  // Reading from a Stream
  // Create a readable stream
  // Handle stream events ➡️ data , end, and error
  //   const rstream = fs.createReadStream("index.txt");
  //   ("indexs.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not find");
  //   });

  // third way
  const rstream = fs.createReadStream("index.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
