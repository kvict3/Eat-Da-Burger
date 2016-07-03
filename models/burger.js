var orm = require('../config/orm.js');


var addOrDevourBurger = {
  addBurger: function(nameInput, burg){
    orm.newBurger("burgers", nameInput, burg);
  },
  devourBurger: function(inputId, burg){
    orm.devoured("burgers", inputId, burg);
  },
  findAllBurgers: function(burg) {
    orm.allBurgers(burg);
  }
};

module.exports = addOrDevourBurger;