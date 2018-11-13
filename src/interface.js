$(document).ready(function () {
  var game = new Game;
  var cordinates= "";

  checkPlayer();

  $('button').click(function(e){
    cordinates = e.target.id;
    checkPlayer();
    addMove();
    setPlayerMove();
    game.switchPlayer();
  });

  function addMove() {
    $(`#${cordinates}`).text(game.playerTurn())
  }

  function checkPlayer() {
    $('#player').text(game.playerTurn())
  }

  function setPlayerMove(){
    game.setMove(cordinates)
  }
});
