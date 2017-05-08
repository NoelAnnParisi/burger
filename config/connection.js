<<<<<<< HEAD
const mysql = require('mysql'); 
var connection;
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: "burgers_db"
//   });
// }
=======
const mysql = require('mysql');
var connection;

>>>>>>> parent of f257e40... revert
connection = mysql.createConnection(process.env.JAWSDB_URL); 

// Make connection.
connection.connect(function(err) {

  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "burgers_db"
// });

// connection.connect(err => {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });


module.exports = { connection:connection };