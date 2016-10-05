class GameModel {
    constructor(puzzle, tilesBoard, started = false, completed = false) {
        this.tilesBoard = tilesBoard;
        this.puzzle = puzzle;
        this.started = started;
        this.completed = completed;
    }

    swapTile(row, column){
        this.tilesBoard.swapWithEmpty(row, column);
        this.started = true;
    }
};

export default GameModel;
