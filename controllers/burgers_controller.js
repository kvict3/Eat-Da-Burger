var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//get route -> index
router.get('/', function(req,res) {
  // console.log('works')
  burger.findAllBurgers(function(burger_data){
    // console.log('got here')
    res.render('index', {burger_data});
  });
});

//post route -> back to index
router.post('/create', function(req, res) {
  burger.addBurger(req.body.burger_name, function(result){
    res.redirect('/');
  });
});


router.post('/devour/:burger', function(req,res){
  burger.devourBurger(req.params.burger, function(result){
    res.redirect('/');
  });
});


module.exports = router;