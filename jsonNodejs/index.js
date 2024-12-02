// JSON stand for JavaScript Object Notation. jSON is a lightweight Format for storing and transporting data.JSON is often used when data is sent form a server to a web page.

const fs = require("fs");

const bioData = {
  name: "manisha",
  age: "25",
  channel: "Manisha Nawalakhe",
};

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// {"name":"manisha","age":"25","channel":"Manisha Nawalakhe"}

// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log(objData.channel);
// { name: 'manisha', age: '25', channel: 'Manisha Nawalakhe' }

// 1: convert to JSON
// 2: dusre file me add kar dena
// 3: readFile
// 4: again convert back to js obj orijanal
// 5: console.log

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log(err);
//   console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(err);
  console.log(data);
  console.log(orgData);
});

// {"name":"manisha","age":"25","channel":"Manisha Nawalakhe"}
// { name: 'manisha', age: '25', channel: 'Manisha Nawalakhe' }
