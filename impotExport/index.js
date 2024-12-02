// const name = require("./oper");
// console.log(name);

// const add = require("./oper");
// console.log(add(5, 5));
// console.log(sub(10, 5));

// const oper = require("./oper");
// console.log(oper);{ add: [Function: add], sub: [Function: sub] }
// console.log(oper);
// console.log(oper.add(5, 5));
// console.log(oper.sub(10, 5));

const { add, sub } = require("./oper");
console.log(add(5, 5));
console.log(sub(10, 5));
