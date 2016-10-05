import { Games }  from '../Games'
import Puzzle from '../Puzzle'
import GameModel from '../GameModel'

test('Game.isValidAction', () => {
    expect(Games.isValidAction('play')).toBe(true);
    expect(Games.isValidAction('continue')).toBe(true);
    expect(Games.isValidAction('xxx')).toBe(false);
    expect(Games.isValidAction(null)).toBe(false);
    expect(Games.isValidAction(undefined)).toBe(false);
});


test('Game.resumeGame 1', () => {
    var puzzle = {
        level: Puzzle.level.expert,
        num: 5,
        labels: ['a', 'b', 'c'],
        id: "id-123",
    }
    //var stateJSON = '{"puzzleId": "id-123", "tilesBoardState": [1, 2, 3, 4, 5, 6, 7, 8, 9], "completed": true }';
    var state = {
        puzzleId: puzzle.id,
        tilesBoardState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        completed: true
    };

    var testStorage = {
        getGame: jest.fn()
    }
    testStorage.getGame.mockReturnValueOnce(state);

    var game = new Games(testStorage);
    var result = game.resumeGame(puzzle, false);

    expect(result.puzzle).toBe(puzzle);
    expect(result.started).toBe(true);
    expect(result.completed).toBe(true);
    var resultState = result.tilesBoard.getTileKeysState();
    expect(resultState.length).toBe(state.tilesBoardState.length);
    for (var i = 0; i < state.tilesBoardState.length; i++) {
        expect(resultState[i]).toBe(state.tilesBoardState[i]);
    }
});

test('Game.resumeGame 2', () => {
    var testStorage = {
        getGame: jest.fn()
    }
    testStorage.getGame.mockReturnValueOnce(null);

    var puzzle = {
        level: Puzzle.level.expert,
        num: 5,
        labels: ['a', 'b', 'c'],
        id: 123,
    }
    var game = new Games(testStorage);
    var result = game.resumeGame(puzzle, false);

    expect(result.puzzle).toBe(puzzle);
    expect(result.started).toBe(false);
    expect(result.completed).toBe(false);
    expect(typeof result.tilesBoard).toBe('object');

    expect(testStorage.getGame.mock.calls.length).toBe(1);
    expect(testStorage.getGame.mock.calls[0][0]).toBe(puzzle.id);
});

test('Games.gamesForLevel', () => {
    var games = new Games(null);
    games.resumeGame = jest.fn();
    games.resumeGame.mockReturnValue(() => new GameModel());
    var result = games.gamesForLevel(Puzzle.level.beginner, true);

    expect(games.resumeGame.mock.calls.length).toBe(result.length);
});