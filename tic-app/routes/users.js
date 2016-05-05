var express = require('express');
var router = express.Router();

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


router.get('')

module.exports = router;
