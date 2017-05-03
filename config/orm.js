const connection = require('./connection');
const orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, (err, result) => {
      console.log(result);
    });
  },
  insertOne: function(results) {
    var queryString = "INSERT INTO burgers SET ?";
    connection.query(queryString, results, (err, result) => {
      console.log(result);
    });
  },
  updateOne: function(results) {
    var queryString = "UPDATE burgers SET eaten = ? WHERE burger_name = ?"
    connection.query(queryString, results, (err, result) => {
      console.log(result);
    });
  }
};
module.exports = orm;