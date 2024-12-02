import mongoose from "mongoose";

// Create a connection to the database
mongoose
  .connect("mongodb://localhost:27017/ttchannel")
  .then(() => console.log("Connection successful"))
  .catch((err) => console.error("Connection error:", err));

//schema

//A mongoose schema defines the structure of the document,
//default values, validators, etc..,

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document
// default values, validators,etc., whereas a Mongoose model
// provides an interface to the database for creating,
// querying, updating, deleting records, etc.
// which database we create in schema that use here for collection of the data for the schema

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// export default Playlist; here Playlist is a collection name and it should be singular only and also should be capital

//create a document or insert

const createDocument = async () => {
  try {
    // const reactPlaylist = new Playlist({
    //   name: "ReactJs",
    //   ctype: "Front End",
    //   videos: 40,
    //   author: "Manisha",
    //   active: true,
    // });
    const jsPlaylist = new Playlist({
      name: "JavaScript",
      ctype: "Front End",
      videos: 150,
      author: "Manisha",
      active: true,
    });

    const mongoPlaylist = new Playlist({
      name: "MongoDB",
      ctype: "Database",
      videos: 10,
      author: "Manisha",
      active: true,
    });
    const mongoosePlaylist = new Playlist({
      name: "Mongoose JS",
      ctype: "Database",
      videos: 4,
      author: "Manisha",
      active: true,
    });
    const exprssPlaylist = new Playlist({
      name: "Express JS",
      ctype: "Back end",
      videos: 20,
      author: "Manisha",
      active: true,
    });
    // const result = await reactPlaylist.save();
    // console.log(result); for the single data
    const result = await Playlist.insertMany([
      jsPlaylist,
      mongoPlaylist,
      mongoosePlaylist,
      exprssPlaylist,
    ]);
    console.log(result);
  } catch (error) {
    console.log(err);
  }
};
// createDocument();

// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ ctype: "Front End" })
//       .select({ name: 1 })
//       .select({ _id: 0 })
//       .limit(1);
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };

// getDocument();

// comparsion opertor
// const getDocument = async () => {
//   try {
//     const result = await Playlist
//        .find({ videos: { $gt: 50 } })
//       .find({ videos: { $gte: 50 } })
//        .find({ videos: { $lte: 50 } })
//       .find({ ctype: { $in: ["Back end", "Database"] } })
//       .select({ name: 1 })
//       .select({ _id: 0 });
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };

// getDocument();

// logical operator
// const getDocument = async () => {
//   try {
//     const result = await Playlist
//        .find({
//          $or: [{ ctype: "Back end" }, { author: "Manisha" }],
//        })
//       .find({
//         $and: [{ ctype: "Back end" }, { author: "Manisha" }],
//       })
//       .select({ name: 1 });
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };

// getDocument();

//sorting and Count Query Methods
// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ author: "Manisha" })
//       .select({ name: 1 })
//       .sort({ name: 1 });
//      .countDocuments();
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };

// getDocument();

// upadate the document

// const updateDocument = async (_id) => {
//   try {
//     const result = await Playlist
//       // updateOne
//       .findByIdAndUpdate(
//         { _id },
//         {
//           $set: {
//             name: "JavaScript",
//           },
//           new: true,
//           useFindAndModify: false,
//         }
//       );
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };

// updateDocument("671645405c58851d6ff0df21");

// delete method

const deleteDocument = async (_id) => {
  try {
    const result = await Playlist
      // deleteOne
      .findByIdAndDelete({ _id });
  } catch (error) {
    console.log(error);
  }
};
deleteDocument("671645405c58851d6ff0df21");
