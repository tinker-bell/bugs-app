
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
}

export default GameStorage;