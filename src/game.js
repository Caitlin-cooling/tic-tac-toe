Game = function() {
  this.player = "X";
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
