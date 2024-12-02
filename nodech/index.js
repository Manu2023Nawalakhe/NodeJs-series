//challenge time

//1:Create a folder named it thapa
//2:Create a file in it named bio.txt and data into it.
//3:add more data into the file at the end of existing data
//4:read the data without getting the buffer data at first.
//5:file encoding
//6:Reanme the file name to mybio.txt
//7:now delete both the file and the folder

const fs = require("fs");

//fs.mkdirSync("thapa");

// fs.writeFileSync("thapa/bio.txt", "My name is manisha");
//fs.appendFileSync("thapa/bio.txt", "My name is Dhanu \n");

// const data = fs.readFileSync("thapa/bio.txt", "utf8");
// console.log(data);

//fs.renameSync("thapa/bio.txt", "thapa/myBio.txt");

// fs.unlinkSync("thapa/myBio.txt");

fs.rmdirSync("thapa");
