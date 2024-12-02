const fs = require("fs");

// creating a new file
//if file are not created then it create a new file
// fs.writeFileSync("read.txt", "Hello from File System");

// but if file are already created then it override that files
// fs.writeFileSync("read.txt", "Hello from File System,this is second file");

// fs.appendFileSync("read.txt", " Hello How are you \n");

//nodejs includes all aditional data type called buffer
//(not available in browser's JavaScript)
//Buffer is mainly used to store binary data
//while reading from a file or receiving packets over the network

// const buf_data = fs.readFileSync("read.txt");

// org_data = buf_data.toString();
// console.log(org_data);

// rename file

fs.renameSync("read.txt", "readwrite.txt");
