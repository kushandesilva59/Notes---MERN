const express = require("express");
const { getNotes } = require("../controllers/notesController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);

router.route("/create").post();
router.route("/:id").get().put().delete();

// router.use((err, req, res, next) => {
//   console.error(err); // Log the error for debugging purposes

//   const statusCode = err.status || 500;
//   const errorMessage = err.message || "Internal Server Error";

//   res.status(statusCode).json({ message: errorMessage });
// });

module.exports = router;
