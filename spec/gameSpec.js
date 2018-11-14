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
    it("gets the moves of the player X", function(){
      game.setMove("a3")
      expect(game.getMovesX()).toEqual(["a3"])
    });

    it("gets the moves of the player O", function(){
      game.setMove("a3")
      game.setMove("c3")
      expect(game.getMovesO()).toEqual(["c3"])
    });
  });

  describe("checkWinner", function(){
    it("determines that the winner is X horizontally", function(){
      game.setMove("a3")
      game.setMove("c3")
      game.setMove("a2")
      game.setMove("b2")
      game.setMove("a1")
      expect(game.checkWinner()).toBe("X")
    });

    it("determines that the winner is O vertically", function(){
      game.setMove("a1")
      game.setMove("a3")
      game.setMove("b2")
      game.setMove("b3")
      game.setMove("b1")
      game.setMove("c3")
      expect(game.checkWinner()).toBe("O")
    });

    it("determines a draw when the board is full", function(){
      game.setMove("a3")
      game.setMove("a2")
      game.setMove("a1")
      game.setMove("b3")
      game.setMove("b2")
      game.setMove("b1")
      game.setMove("c3")
      game.setMove("a2")
      game.setMove("a1")
      expect(game.checkWinner()).toBe("draw")
    });
  });
});
