$(document).ready(function () {
  var game = new Game;
  var move= "";

  checkPlayer();

  $('button').click(function(e){
    move = e.target.id;
    addMove();
    setPlayerMove();
    checkPlayer();
    checkForWinner();
  });

  function addMove() {
    $(`#${move}`).text(game.playerTurn())
  }

  function checkPlayer() {
    $('#player').text(game.playerTurn())
  }

  function setPlayerMove(){
    game.setMove(move)
  }

  function checkForWinner() {
    if(game.checkWinner() !== undefined) {
      $('#winner').text(`Player ${game.checkWinner()} won`)
    }
  }
});
