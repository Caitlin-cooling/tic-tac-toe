Game = function() {
  this.player = "X";
  this.xMoves = [];
  this.oMoves = [];
  this.moveCount = 0;
  this.winningCombos = ("a1" && "a2" && "a3") || ("b1" && "b2" && "b3") || ("c1" && "c2" && "c3") || ("a3" && "b3" && "c3") || ("a2" && "b2" && "c2") || ("a1" && "b1" && "c1") || ("a1" && "b2" && "c3") || ("a3" && "b2" && "c1")
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

Game.prototype.setMove = function(move) {
  if(this.player === "X") {
    this.xMoves.push(move);
  } else {
    this.oMoves.push(move);
  }
  ++ this.moveCount;
  this.switchPlayer();
}

Game.prototype.getMovesX = function(move) {
  return this.xMoves;
}

Game.prototype.getMovesO = function(move) {
  return this.oMoves;
}

Game.prototype.checkWinner = function () {
  if(this.moveCount === 9) {return "draw"}
  if(this.xMoves.includes(this.winningCombos)){
    return "X"
  } else if(this.oMoves.includes(this.winningCombos)){
    return "O"
  }
};
