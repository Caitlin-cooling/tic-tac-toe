$(document).ready(function () {
  var game = new Game;
  var cordinates= "";

  checkPlayer();

  $('button').click(function(e){
    cordinates = e.target.id;
    game.switchPlayer();
    checkPlayer();
    setPlayerMove();
  });

  function checkPlayer() {
    $('#player').text(game.playerTurn())
  }

  function setPlayerMove(){
    game.setMove(cordinates)
  }
});
