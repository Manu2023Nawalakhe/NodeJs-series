const path = require("path");

console.log(
  path.dirname("C:/Users/manis/AllBackend/Nodejs/pathModules/path.js")
);
console.log(
  path.extname("C:/Users/manis/AllBackend/Nodejs/pathModules/path.js")
);
console.log(
  path.basename("C:/Users/manis/AllBackend/Nodejs/pathModules/path.js")
);

const myPath = path.parse(
  "C:/Users/manis/AllBackend/Nodejs/pathModules/path.js"
);

console.log(myPath.root);
