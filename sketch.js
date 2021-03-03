var canv;
var columns = [0, 0, 0, 0, 0, 0, 0];
let game;
let startButton;
function mousePressed(){
  if(game.state == GameState.IN_GAME){
    game.tiles[Tile.t_count - 1].state = TileState.FLYING;
  }
}

//-----------MAIN FUNCTIONS-----------------
function setup() {
  game = new Game();
  canv = createCanvas(700, 700);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2 + 50;
  canv.position(x, y);
  startButton = createButton("Start");
  startButton.style("background-color", color("#ff847c"));
  startButton.position(x + 350, y + 350);
  startButton.mousePressed(() => {  setTimeout(() => { game.state = GameState.IN_GAME;
                                    startButton.remove();}, 1000); });
}

function draw() {
  background(42, 54, 59);

  switch(game.state){
    case GameState.MAIN_MENU:
      break;
    case GameState.IN_GAME:
      // --------- Setup background scenery -------------
      for(var i = 0; i <= 7; i++){
        strokeWeight(1);
        stroke("#fecea8");
        line(Tile.TileSize * i, 0, Tile.TileSize * i, height);
      }
      // -------------------------------------------------
      game.update(game.heights);
      game.checkWin();
      break;
    case GameState.POST_GAME:
      break;
  }
}
//-------------------------------------------------------
