$(document).ready(function () {
  var game = new Game;

  checkPlayer();

  $('button').click(function(){
    game.switchPlayer();
    checkPlayer();
  });

  function checkPlayer() {
    $('#player').text(game.playerTurn())
  }
});
