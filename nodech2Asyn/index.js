// challenge time

// 1: create one folder named it Thapa
// 2: create a file in it named bio.txt and data into it
// 3: Add more data into the file a the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const { log } = require("console");
const fs = require("fs");
// fs.mkdir("thapa", (err) => {
//   console.log("folder created");
//   console.log(err);
// });

// fs.writeFile("./thapa/bio.txt", "My name is Manisha", (err) => {
//   console.log("folder created");
//   console.log(err);
// });

// fs.appendFile("./thapa/bio.txt", " Hello", (err) => {
//   console.log("folder created");
//   console.log(err);
// });

// fs.readFile("./thapa/bio.txt", "utf-8", (data, err) => {
//   console.log(data);
//   console.log(err);
// });

// fs.rename("./thapa/bio.txt", "./thapa/mybio.txt", (err) => {
//   console.log("rename done");
//   console.log(err);
// });

// fs.unlink("./thapa/mybio.txt", (err) => {
//   console.log("Deleted Successufully");
//   console.log(err);
// });

fs.rmdir("./thapa", (err) => {
  console.log(err);
  console.log("Deleted folder");
});
