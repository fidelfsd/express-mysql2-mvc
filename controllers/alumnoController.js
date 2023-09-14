const Alumno = require("../models/alumno");

const getPagesFromCount = (count) => Math.round(count / Alumno.LIMIT);

alumnoController = {};

alumnoController.fetchAll = async (req, res, next) => {
   let { page } = req.query;
   page = +page || 1;

   try {
      const count = await Alumno.getCount();
      const pages = getPagesFromCount(count);

      if (page > pages) {
         res.status(422).json({
            succsess: false,
            message: `page must be less or equal to ${pages}`,
         });
      } else {
         const data = await Alumno.fetchAll(page);
         res.status(200).json({
            info: {
               success: true,
               message: "Get all students retreiving succesfully",
               total_results: count,
               limit_results: data.length,
               page: page,
               total_pages: pages,
            },
            results: data,
         });
      }
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Error retreiving students",
         error: error.message || error,
      });
   }
};

module.exports = alumnoController;
