const tileSize = 100;
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
var win_state = 0;
function check_win(){
  var length = 1;
  var prev = 0;
  // vertical lines
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board.length; j++){
      if(board[i][j] !== 0 && board[i][j] === prev){
        length++;
      }
      else{
        prev = board[i][j];
        length = 1;
      }
      if(length >= 4)
        return prev;
    }
  }
  // horizontal lines
  length = 1;
  prev = 0;
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board.length; j++){
      for(var j = 0; j < board.length; j++){
        if(board[j][i] !== 0 && board[j][i] === prev){
          length++;
        }
        else{
          prev = board[j][i];
          length = 1;
        }
        if(length >= 4)
          return prev;
      }
    }
  }
  // diagonal (top left - bottom right) lines
  length = 1;
  prev = 0;
  const noOfDiagonals = 7;
  for(var i = 0; i < 7; i++){

    if(length >= 4)
      return prev;
  }
  // diagonal(bottomleft - top right) lines
  length = 1;
  prev = 0;
  for(var i= 0 ; i < 7; i++){
    if(length >= 4){
      return prev;
    }
  }
  return 0;
}
function mousePressed(){
  tiles[Tile.t_count - 1].is_laying = false;
  tiles[Tile.t_count - 1].c_y = 0;
  tiles[Tile.t_count - 1].cy_a = 1;
  index = selCol;
}
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2 + 50;
  canv.position(x, y);
}
function setup() {
  canv = createCanvas(700, 700);
  centerCanvas();
  tiles.push(new Tile());
  console.log(board);
}
function draw() {
  if(win_state === 0){
    background(42, 54, 59);
    for(var i = 0; i <= 7; i++){
      strokeWeight(1);
      stroke("#fecea8");
      line(tileSize * i, 0, tileSize * i, height);
    }
    selCol = Math.floor(mouseX/tileSize);
    columns = tiles[Tile.t_count - 1].update(selCol, columns, index);
    tiles.forEach(element => {
      element.show();
    });
    if(tiles[Tile.t_count - 1].is_laying){
      tiles.push(new Tile());
    }
  }
  else{
    background(42, 54, 59);
    noLoop();
    if(win_state === 1)
      console.log("blue won :)");
    else if(win_state === 2)
      console.log("red won :)");
  }
}

