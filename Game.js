const State = {
    MAIN_MENU: 0,
    IN_GAME: 1,
    POST_GAME: 2
}

class Game{
    constructor(){
        this.state = State.MAIN_MENU;
        this.winner = 0;    // 0 - no one  1 - blue 2 - red
        this.board = [[0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]];
    }
    checkWin(board){
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
              this.winner = prev;
          }
        }
        // horizontal lines
        length = 1;
        prev = 0;
        for(var i = 0; i < board.length; i++){        
            for(var j = 0; j < board.length; j++){
            if(board[j][i] !== 0 && board[j][i] === prev){
                length++;
            }
            else{
                prev = board[j][i];
                length = 1;
            }
            if(length >= 4)
                this.winner = prev;
            }
        }
    }
    updateState(){
        
    }
}