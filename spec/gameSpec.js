describe("playerMove", function(){
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("returns player X", function(){
    expect(game.playerMove()).toBe("X")
  });

  it("returns player O", function(){
    game.switchPlayer();
    expect(game.playerMove()).toBe("O")
  });
});
