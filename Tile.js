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
    update(selCol, columns){
      if(this.c_y === 0){
        this.c_x = selCol;
      }
      this.cy_v += this.cy_a;
      this.c_y += this.cy_v;
      if(this.c_y >= height - 50){
        this.cy_a = 0;
        this.cy_v = 0;
        this.c_y = height - 50;// - tileSize;
        this.is_laying = true;
        columns[selCol]++;
      }
      return columns;
    }
    show(){
      stroke(this.color);
      fill(this.color);
      circle(this.c_x, this.c_y, this.r);
    }
  }