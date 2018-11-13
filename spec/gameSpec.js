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

  describe("getMoves", function(){
    it("gets the moves of a player", function(){
      game.setMove("3,3")
      game.setMove("1,3")
      expect(game.getMoves()).toEqual(["3,3", "1,3"])
    });
  });
});
