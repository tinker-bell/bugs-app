class GameModel {
    constructor(puzzle, tilesBoard, started = false, completedFromState = false) {
        this.tilesBoard = tilesBoard;
        this.puzzle = puzzle;
        this.started = started;
        this.matchedPairsCount = this.tilesBoard.getMatchedPairsCount();
        this.completedFromState = completedFromState;
    }

    swapTile(row, column){
        this.tilesBoard.swapWithEmpty(row, column);
        this.started = true;
        this.matchedPairsCount = this.tilesBoard.getMatchedPairsCount();
        
    }

    get completed(){
        return this.tilesBoard.pairsToMatchCount === this.matchedPairsCount;
    }
};

export default GameModel;
