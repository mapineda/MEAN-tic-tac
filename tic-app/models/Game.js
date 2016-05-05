var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  player1: { type:String, required:true },
  player2: { type:String, required:true },
  playerTurn: { type:Number, default: 0 },
  player1Wins: { type:Number, default: 0 },
  player2Wins: { type:Number, default: 0 },
  winNumber: { type:String },
  board: { type: Mixed, default: [ [null, null, null], [null, null, null], [null, null, null]] }
})


var Game = mongoose.model('Game', gameSchema);

//make available to other files
module.exports = Game;
