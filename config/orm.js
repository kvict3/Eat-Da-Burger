var connection = require('./connection.js');


var orm = {
  newBurger: function(tableInput, nameInput, cs) { 
    var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(queryString, [nameInput], function(err, result) {
      if (err) throw err;
      cs(result);
    });
  },
  devoured: function(tableInput, idInput, cs) {
    var queryString = "UPDATE " + tableInput + " SET devoured = 1  WHERE burger_name = ?";
    connection.query(queryString, [idInput], function(err, result) {
      if (err) throw err;
      cs(result);
    });
  },
  allBurgers: function(cs) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cs(result);
    });
  }
}

    
module.exports = orm;