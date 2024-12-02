const fs = require("fs");

// fs.writeFile("read.txt", "Hello from Manisha :)", (err) => {
//   console.log("file is created");
//   console.log(err);
// });

//we pass them a function an argument - a callback-
//that gets called when that task completes.
// the callback has an arguments that tells you whether
// the operation completed successfully
// now we need to saywhat to do when fs. writefile
// has completed (even it it's nothing ), and start
// checking for errors.

// fs.appendFile("read.txt", " Hello from Dhanu ❤️", (err) => {
//   console.log("task Done");
//   console.log(err);
// });

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log("task completed");
  console.log(data);
  console.log(err);
});
