const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// async function connectDB() {
//   try {
//     // Connect to MongoDB using Mongoose
//     await mongoose.connect("mongodb://localhost:27017/MERN-notes", {
//     //   useNewUrlParser: true,
//       useUnifiedTopology: true,
//       //   useCreateIndex: true,
//       //   useFindAndModify: false,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit the process with an error code
//   }
// }

mongoose
  .connect("mongodb://127.0.0.1:27017/MERN-notes", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("OK");
    });
  })
  .catch((err) => {
    console.error(err);
  });

// connectDB(); // Call the connectDB function after defining it

app.listen(PORT, () => {
  console.log(`Server running PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API is running!...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
