const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/alumnos");

/* home page. */
router.use("/", indexRouter);

/* users listing. */
router.use("/alumnos", usersRouter);

module.exports = router;
