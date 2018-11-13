describe("game", function(){
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe("playerTurn", function(){
    it("returns player X", function(){
      expect(game.playerTurn()).toBe("X")
    });

    it("returns player O", function(){
      game.switchPlayer();
      expect(game.playerTurn()).toBe("O")
    });
  });

});
