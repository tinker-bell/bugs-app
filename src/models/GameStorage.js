
export class GameStorage {
    constructor(storage) {
        this.storage = storage;
    }

    saveGame(game) {
        var state = {
            puzzleId: game.puzzle.id,
            tilesBoardState: game.tilesBoard.getTileKeysState(),
            completed: game.completed
        };

        this.storage.setItem(state.puzzleId, JSON.stringify(state));
    }

    getGame(puzzleId) {
        var jsonState = this.storage.getItem(puzzleId);     
        return JSON.parse(jsonState);
    }

    removeGame(puzzleId){
        this.storage.removeItem(puzzleId);
    }

    // saveLastPuzzleId(gameModel) {
    //     this.storage.setItem("lastPuzzleId", gameModel.puzzleId);
    // }

    // getLastPuzzleId() {
    //     var id = this.storage.getItem("lastPuzzleId");
    //     return (id) ? JSON.parse(id) : null;
    // }
}

export default GameStorage;