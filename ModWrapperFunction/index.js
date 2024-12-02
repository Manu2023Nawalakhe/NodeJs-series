(function (exports, require, module, __filename, __dirname) {
  const a = require("fs");
  const name = "Manisha";
  console.log(name);
  module.exports = { name };
});

// in the node js everithing is a module when we create a file its consider as a seprete file thats why Wrapper Function in node js is nothing but a IIFE function in JavaScript that s why when we enter code in node js file it always private

// const name = "Manisha";
// console.log(name);

//bonus

// (function () {
//   var a = "Manisha Nawalakhe";
//   console.log(a);
// })();

console.log(__dirname);
console.log(__filename);
