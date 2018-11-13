Game = function() {
  this.player = "X";
  this.moves = [];
};

Game.prototype.playerTurn = function () {
  return this.player;
};

Game.prototype.switchPlayer = function () {
  if(this.player === "X"){
    this.player = "O"
  } else {
    this.player = "X"
  }
};

Game.prototype.setMove = function(cordinates) {
  this.moves.push(cordinates);
}

Game.prototype.getMoves = function(cordinates) {
  return this.moves;
}
