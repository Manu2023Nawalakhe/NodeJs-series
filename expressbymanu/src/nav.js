//www.thapa.com - welcome to my home page
// /about - welcome to my about page
// /contact - welcome to my contact page
// /temo - welcome to my temp page

import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  // res.send("welcome to my home page");
  res.write("<h1>Welcome to my again home page</h1>");
  res.end(); //use in node
  res.send(); // use in express if we not use this after write it will be beffuring for loading more data
});

app.get("/about", (req, res) => {
  res.send("welcome to my about page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("welcome to my contact page");
});
// On using status(), we are actually checking it's status first than sending some response which is a good practice , and  on using  send() ,we r  sending response directly i.e. what to show on the page ,So in case of an error we can send a message as response on using status () which is the benefit of this

// app.get("/temp", (req, res) => {
// res.send("welcome to my temp page");
//   res.send([
//     {
//       id: 1,
//       name: "Manisha",
//     },
//     {
//       id: 2,
//       name: "Dhanu",
//     },
//     {
//       id: 3,
//       name: "Jaya",
//     },
//   ]);
// });

app.get("/temp", (req, res) => {
  // res.send("welcome to my temp page");
  res.json([
    {
      id: 1,
      name: "Manisha",
    },
    {
      id: 2,
      name: "Dhanu",
    },
    {
      id: 3,
      name: "Jaya",
    },
  ]);
});

// The methods are identical when an object  or array is passed,but res.json() will also convert non-objects,such as null and undefined,which are not valid json

// res.send():

// If you pass a string to res.send(), it will send that string as-is in the response.
// If you pass an object or an array, it will automatically convert it to a JSON string and set the Content-Type to application/json.
// res.json():

// When you use res.json(), it is specifically meant for sending JSON responses. Regardless of the type of data you pass (object, array, etc.), it will convert it to JSON and set the Content-Type to application/json.
// If you pass a string, res.json() will treat it as an object and may not behave as expected, since it's not intended for plain strings.

app.listen(PORT, () => {
  console.log(`listening to the port to ${PORT}`);
});
