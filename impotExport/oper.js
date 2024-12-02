const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const name = "vinod";
// module.exports = name;
module.exports.add = add; // after = name must be same
module.exports.sub = sub;
// module.exports.sub = {add,sub}; other way for modul declaration
