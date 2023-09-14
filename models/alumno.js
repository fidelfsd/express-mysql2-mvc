const db = require("../db/db");

const Alumno = {};

Alumno.LIMIT = 3;

Alumno.fetchAll = (page = 1) => {
   return new Promise((resolve, reject) => {
      if (!db) {
         reject(new Error("Can't connect to database"));
      }

      const { LIMIT } = Alumno;
      const offset = (page - 1) * LIMIT;

      const SQL = `SELECT * FROM alumnos LIMIT ${LIMIT} OFFSET ${offset};`; // LIMIT n OFFSET (p-1)*n

      db.query(SQL, (error, rows) => {
         if (error) reject(error);
         else resolve(rows);
      });
   });
};

Alumno.getCount = () => {
   return new Promise((resolve, reject) => {
      if (!db) {
         reject(new Error("Can't connect to database"));
      }

      const SQL = `SELECT COUNT(id) AS 'count' FROM alumnos;`;

      db.query(SQL, (error, rows) => {
         if (error) reject(error);
         else resolve(rows[0].count);
      });
   });
};

module.exports = Alumno;
