var express = require('express');
var router = express.Router();
// require User model
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET new user
router.get('/new', function(req, res, next) {
    res.render('users/new');
});

//INDEX
router.get('/', function(req, res) {

});

//SHOW
router.get('/:id', function(req, res){

});

// NEW
router.get('/new', function(req, res) {

});

//CREATE
router.post('/', function(req, res) {

});

//EDIT
router.get('/:id/edit', function(req, res) {

});

// UPDATE
router.put('/:id', function(req, res) {

});

// DELETE
router.delete('/:id', function(req, res) {

});


//SHOW USER
router.post('/', function(req, res, next) {
    res.render('users/show', {
        name: req.body.name,
        favorite: req.body.email
    });
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;

  var newUser = User({
    name: name,
    email: email
  });

  //save new user
  newuser.save(function(err, user) {
    if (err) console.log(err);

    res.send('User created!');
  });
});


router.get('')

module.exports = router;
