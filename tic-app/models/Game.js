var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  player1: { type:String, required:true },
  player2: { type:String, required:true },
  playerTurn: { type:Number, default: 0 },
  player1Wins: { type:Number, default: 0 },
  player2Wins: { type:Number, default: 0 },
  winNumber: { type:String },
  board: { type: Mixed, default: [ [null, null, null], [null, null, null], [null, null, null]] }
});

GameSchema.statics.playerMoves = function(gameId, rowIndex, colIndex, callback) {
	var Game = this;
	if (!gameId) {
		callback({status: 400, message: 'gameId is required'});
		return;
	}
	Game.findById(gameId, function (err, game) {
		if (err || !game) {
	  		callback({status: 403, message: 'Invalid gameId was provided'});
	  		return;
		}

		if (!game.board) {
			game.board = [ [null, null, null], [null, null, null], [null, null, null]];
		}
  });



var Game = mongoose.model('Game', gameSchema);

//make available to other files
module.exports = Game;
