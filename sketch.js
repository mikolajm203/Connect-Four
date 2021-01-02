const tileSize = 100;
var canv;
var selCol;
var tiles = [];
var columns = [0, 0, 0, 0, 0];
function mousePressed(){
  tiles[Tile.t_count - 1].is_laying = false;
  tiles[Tile.t_count - 1].c_y = 0;
  tiles[Tile.t_count - 1].cy_a = 1;
}
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canv.position(x, y);
}
function setup() {
  canv = createCanvas(500, 600);
  centerCanvas();
  tiles.push(new Tile());
}
function draw() {
  background(42, 54, 59);
  for(var i = 0; i <= 5; i++){
    strokeWeight(1);
    stroke("#fecea8");
    line(tileSize * i, 0, tileSize * i, height);
  }
  selCol = Math.floor(mouseX/tileSize) * tileSize + 50;
  columns = tiles[Tile.t_count - 1].update(selCol, columns);
  for(var i = 0; i < Tile.t_count; i++){
    tiles[i].show();
  }
  if(tiles[Tile.t_count - 1].is_laying){
    tiles.push(new Tile());
  }
}

