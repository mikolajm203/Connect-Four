var canv;
var selCol;
var tiles = [];
var columns = [0, 0, 0, 0, 0, 0, 0];
var index;
var board = [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]];
let game = new Game();
let startButton;
function mousePressed(){
  tiles[Tile.t_count - 1].is_laying = false;
  tiles[Tile.t_count - 1].c_y = 0;
  tiles[Tile.t_count - 1].cy_a = 1;
  index = selCol;
}

//-----------MAIN FUNCTIONS-----------------
function setup() {
  canv = createCanvas(700, 700);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2 + 50;
  canv.position(x, y);
  tiles.push(new Tile());
  startButton = createButton("Start");
  startButton.style("background-color", color("#ff847c"));
  startButton.position(x + 350, y + 350);
  startButton.mousePressed(() => {  setTimeout(() => { game.state = State.IN_GAME;
                                    removeElements();}, 1000); });
}

function draw() {
  background(42, 54, 59);
  switch(game.state){
    case State.MAIN_MENU:
      break;
    case State.IN_GAME:
      for(var i = 0; i <= 7; i++){
        strokeWeight(1);
        stroke("#fecea8");
        line(Tile.TileSize * i, 0, Tile.TileSize * i, height);
      }
      selCol = Math.floor(mouseX/Tile.TileSize);
      columns = tiles[Tile.t_count - 1].update(selCol, columns, index);
      tiles.forEach(element => {
        element.show();
      });
      if(tiles[Tile.t_count - 1].is_laying){
        tiles.push(new Tile());
      }
      //game.update();
      break;
    case State.POST_GAME:
      break;
  }
}
//-------------------------------------------------------
