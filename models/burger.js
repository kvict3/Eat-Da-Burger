var orm = require('../config/orm.js');


var addOrDevourBurger = {
  addBurger: function(nameInput, cs){
    orm.newBurger("burgers", nameInput, cs);
  },
  devourBurger: function(inputId, burg){
    orm.devoured("burgers", inputId, cs);
  },
  findAllBurgers: function(cs) {
    orm.allBurgers(cs);
  }
};

module.exports = addOrDevourBurger;