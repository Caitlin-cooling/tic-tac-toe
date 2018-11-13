$(document).ready(function () {
  var game = new Game;

  $('#player').text(game.playerTurn())

  $('button').click(function(){
    game.switchPlayer();
    $('#player').text(game.playerTurn())
  });
});
