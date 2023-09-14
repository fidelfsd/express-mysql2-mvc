const express = require("express");
const router = express.Router();
const Alumno = require("../models/alumno");
const alumnoController = require("../controllers/alumnoController");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//    Alumno.fetchAll((error, data) => {
//       if (error) {
//          return res.status(500).json({
//             success: false,
//             message: "Error retreiving students",
//             error: error.message || error,
//          });
//       }

//       res.status(200).json({
//          success: true,
//          message: "Get all students retreiving succesfully",
//          total: data.length,
//          results: data,
//       });
//    });
// });

router.get("/", alumnoController.fetchAll);

module.exports = router;
