const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoute");
const noteRoutes = require("./routes/noteRoute");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const { protect } = require("./middlewares/authMiddleware");

const app = express();
dotenv.config();
app.use(express.json());


//app.use(notFound)
app.use(errorHandler)

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

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API is running!...");
});


app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
