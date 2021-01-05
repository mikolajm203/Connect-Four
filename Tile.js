class Tile{
  static t_count = 0;
  constructor(){
    this.r = tileSize - 10;
    this.c_y = 0;
    this.cy_a = 0;
    this.cy_v = 0;
    this.c_x = 50;
    this.is_laying = false;
    if(Tile.t_count % 2 === 0){
      this.color = "#007b83";
    }
    else{
      this.color = "#ff847c";
    }
    Tile.t_count++;
  }
  update(selCol, columns, index){
    if(this.c_y === 0){
      this.c_x = selCol * tileSize + 50;
    }
    this.cy_v += this.cy_a;
    this.c_y += this.cy_v;
    if(this.c_y >= height - 50 - 100 * columns[index]){
      this.land(columns, index);
    }
    win_state = check_win();
    return columns;
  }
  show(){
    stroke(this.color);
    fill(this.color);
    circle(this.c_x, this.c_y, this.r);
  }
  insert(index){
    for(var i = 0; i < board[index].length; i++){
      if(i === 6){
        if(this.color === "#007b83")
          board[index][i] = 1;    // blue - 1
        else
          board[index][i] = 2;    // red - 2
        return i;
      }
      if(board[index][i + 1] !== 0){
        if(this.color === "#007b83")
          board[index][i] = 1;    // blue - 1
        else
          board[index][i] = 2;    // red - 2
        return i;
      }
    }
  }
  land(columns, index){
    this.cy_a = 0;
    this.cy_v = 0;
    this.c_y = height - 50 - 100 * columns[index];
    this.is_laying = true;
    columns[index]++;
    this.insert(index);
  }
}