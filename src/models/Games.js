import TilesBoardModel from './TilesBoardModel'
import Puzzle from './Puzzle'
import GameModel from './GameModel'
import {Arr} from '../Utils'

export class Games {

    constructor(storage) {
        this.storage = storage;
    }

    resumeLastOrDefaultGame(){
        const lastPuzzleId = this.storage.getLastPuzzle();
        var puzzle = Puzzle.getById(lastPuzzleId);
        return puzzle ? this.resumeGame(puzzle, false) : this.resumeGame(Puzzle.default, false);
    }

    resumeGame(puzzle, isTilesBoardPreview) {
        const gameState = this.storage.getGame(puzzle.id);
        const tilesBoardState = isTilesBoardPreview ? null : (gameState ? gameState.tilesBoardState : null);
        const tilesBoard = new TilesBoardModel().init(puzzle.labels, tilesBoardState);

        const completed = !!gameState && gameState.completed;
        return new GameModel(puzzle, tilesBoard, Boolean(gameState), completed);
    }

    restartGame(puzzle) {
        this.storage.removeGame(puzzle.id);
        //return new GameModel(puzzle,  new TilesBoardModel().init(puzzle.labels));
    }

    saveGame(gameModel) {
        this.storage.saveGame(gameModel);
        this.storage.saveLastPuzzle(gameModel.puzzle.id);
    }

    gamesForLevel(level, isPreview) {
        return Puzzle.getByLevel(level).map(puzzle => this.resumeGame(puzzle, isPreview));

    }

    static isValidAction(action) {
        //return Boolean(action) && typeof Object.keys(Games.action).find((value, index) => value === action) !== 'undefined';
        return Boolean(action) && Arr.contains(Object.keys(Games.action), x => Games.action[x] === action);
    }
};

Games.action = {
    restart: 'restart',
}

export default Games;

