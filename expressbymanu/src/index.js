import path from "path";
import express from "express";
import hbs from "hbs";
import { fileURLToPath } from "url";
const app = express();

// relative absolute
// console.log(__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const staticPath = path.join(__dirname, "../public");
// const templatePath = path.join(__dirname, "../templates");
// const partialsPath = path.join(__dirname, "../templates/partials"); // in the partials when we call it diffrent file with the help of {{>(filename)}} and when we use partials we run file from this commanad nodemon src/index.js because main index file in the src folder
// console.log(staticPath);

//to set the view engine
// app.set("view engine", "hbs");// also use a ejs and pug // this only support to the view folder
//app.set("view",templatePath)
// hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.render("index", {
//     channelName: "vinod",
// for take a dynamic data from index.hbs file
//   });
// });

// if you want to use another folder name nao want to use view that time the structure of program is below

//template engine route
// app.get("/", (req, res) => {
// we can use any other name for res but you should use req same as
// res.render("index", {
//     channel: "Manisha",
//   });
// });

app.get("/about/*", (req, res) => {
  res.render("404", {
    errorcomment: "Opps this about us page couldn't be found", //{{errorcomment}} use in error.hbs page this is use when you type anything after a about page
  });
});

app.get("*",(req,res)=>[
res.render("404",{
  errorcomment: "Opps page couldn't be found",
})
])

app.get("/", (req, res) => {
  res.send("hello world from the manisha");
});

app.get("/about", (req, res) => {
  res.send("hello world from the About");
});

app.listen(8000, () => {
  console.log("Listening the port at 8000");
});
