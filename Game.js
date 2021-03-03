const GameState = {
    MAIN_MENU: 0,
    IN_GAME: 1,
    POST_GAME: 2
}

class Game{
    constructor(){
        this.state = GameState.MAIN_MENU; // game state
        this.winner = 0;    // 0 - no one  1 - blue 2 - red
        this.board = [[0, 0, 0, 0, 0, 0, 0],  //board storing data about tiles placement
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]];
        this.heights = [0, 0, 0, 0, 0, 0, 0]; //Data about amount of tiles in a column
        this.tiles = [];                      //array of tiles to manipulate and draw them
        this.tiles.push(new Tile());
    }
    update(heights){
      this.tiles.forEach(tile => {    //show all tiles
        tile.show();
      });
      var curTileColumn = Math.floor(this.tiles[Tile.t_count - 1].c_x / Tile.TileSize);
      this.tiles[Tile.t_count - 1].update(heights);   //update latest tile (rest doesn't move)
      if(this.tiles[Tile.t_count - 1].state == TileState.LAYING){ //place tile, update board and create new tile
        // -------- stop the falling tile ---------------
        this.tiles[Tile.t_count - 1].cy_a = 0;
        this.tiles[Tile.t_count - 1].cy_v = 0;
        this.tiles[Tile.t_count - 1].c_y = height - 50 - (Tile.TileSize * this.heights[curTileColumn]);
        //-----------------------------------------------
        //-------  update heigts and board array----
        this.heights[curTileColumn]++;
        if(this.tiles[Tile.t_count - 1].color == Color.BLUE){
          this.board[7 - this.heights[curTileColumn]][curTileColumn] = 1;
        }
        else{
          this.board[7 - this.heights[curTileColumn]][curTileColumn] = 2;
        }
        //-----------------------------------------------
        this.tiles.push(new Tile());
      }
    }

    checkWin(){
        var length = 1;
        var prev = 0;
        // vertical lines
        for(var i = 0; i < this.board.length; i++){
          for(var j = 0; j < this.board.length; j++){
            if(this.board[i][j] !== 0 && this.board[i][j] === prev){
              length++;
            }
            else{
              prev = this.board[i][j];
              length = 1;
            }
            if(length >= 4)
              this.winner = prev;
              if(this.winner != 0){
                console.log(prev + "won");
                this.state = GameState.POST_GAME;
              }

          }
        }
        // horizontal lines
        length = 1;
        prev = 0;
        for(var i = 0; i < this.board.length; i++){        
            for(var j = 0; j < this.board.length; j++){
            if(this.board[j][i] !== 0 && this.board[j][i] === prev){
                length++;
            }
            else{
                prev = this.board[j][i];
                length = 1;
            }
            if(length >= 4)
                this.winner = prev;
                if(this.winner != 0){
                  console.log(prev + "won");
                  this.state = GameState.POST_GAME;
                }
            }
        }
    }
}