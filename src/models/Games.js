import TilesBoardModel from './TilesBoardModel'
import Puzzle from './Puzzle'
import GameModel from './GameModel'
import {Arr} from '../Utils'

export class Games {

    constructor(storage) {
        this.storage = storage;
    }

    resumeGame(puzzle, isTilesBoardPreview) {
        const gameState = this.storage.getGame(puzzle.id);
        const tilesBoardState = isTilesBoardPreview ? null : (gameState ? gameState.tilesBoardState : null);
        const tilesBoard = new TilesBoardModel().init(puzzle.labels, tilesBoardState);

        return (gameState) ?
            new GameModel(puzzle, tilesBoard, true, gameState.completed) :
            new GameModel(puzzle, tilesBoard);
    }

    restartGame(puzzle){
        this.storage.removeGame(puzzle.id);
        //return new GameModel(puzzle,  new TilesBoardModel().init(puzzle.labels));
    }

    saveGame(gameModel) {
        this.storage.saveGame(gameModel);
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
    play: 'play',
    continue: 'continue',
}

export default Games;

