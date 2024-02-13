const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoute')

const app = express();
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 5000;


mongoose
  .connect("mongodb://127.0.0.1:27017/MERN-notes", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
  
  })
  .catch((err) => {
    console.error(err);
  });


app.use("/api/users", userRoutes)

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
