const mysql = require("mysql2");
const config = require("../config/config.json");

// crear conexion con la base de datos
const db = mysql.createConnection({
   host: config.host,
   port: config.port,
   user: config.user,
   password: config.password,
   database: config.database,
});

// abrir la conexion
db.connect((err) => {
   if (err) throw err;
   console.log(`Conected to ${config.database} database`);
});

module.exports = db;
