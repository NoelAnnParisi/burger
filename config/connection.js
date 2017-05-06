const mysql = require('mysql');

const connection = mysql.createConnection({
    host: " edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ro2hzl4j8p6257np",
    password: "r7lzsb13woyacczh",
    database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = { connection:connection };