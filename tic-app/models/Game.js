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

    var symbol = playerSymbol(game.playerTurn);
		game.board[rowIndex][colIndex] = symbol;
		game.playerTurn = 1 - game.playerTurn;
		var winnerSymbol = checkForWinner(game);
		if (winnerSymbol)
		{
			var winnerNumber = playerNumber(winnerSymbol);
			if (winnerNumber == 0) {
				game.playerWins1++;
				game.winnerNumber='0';
			}
			else if (winnerNumber == 1) {
				game.playerWins2++;
				game.winnerNumber='1';
			}
			else {
				game.winnerNumber='-1';
			}

		}
		Game.findByIdAndUpdate(game.id, game, function (err, previousValue) {
		    if (err) {
		    	callback({ status: 500, message: err } );
		    }
		    else {
		    	callback(null, game);
		    }
		  });
	});
};

var Game = mongoose.model('Game', gameSchema);

//make available to other files
module.exports = Game;
