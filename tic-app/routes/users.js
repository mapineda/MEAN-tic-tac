var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET new user
router.get('/new', function(req, res, next) {
  res.send('users/new');
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




router.get('')

module.exports = router;
