const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const e = require("express");
const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello from Manisha");
// });

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user.save().then(() => {
//     res
//       .status(201)
//       .send(user)
//       .catch((e) => {
//         res.status(400).send(e);
//       });
//   });
//    res.send("Hello from the Student site");
// });

// app.post("/students", async (req, res) => {
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// read the data of registered Students

// app.get("/students", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.send(studentsData);
//   } catch (error) {
//     res.send(e);
//   }
// });

// get the indivisual Student data using id

app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// update the students by it id

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudents);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete the students by it id

app.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`connection is set on ${port}`);
});
