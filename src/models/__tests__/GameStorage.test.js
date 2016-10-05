import GameStorage   from '../GameStorage'
import TilesBoardModel from '../TilesBoardModel'
import Puzzle from '../Puzzle'


test('GameStorage.getGame 1', () => {
    const id = "id-123";
    const completed = true;
    const keysState = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stateJSON = '{"puzzleId":  "' + id + '", "tilesBoardState": [' + keysState + '], "completed": ' + completed + ' }';
    const testStorage = {
        getItem: jest.fn()
    }
    testStorage.getItem.mockReturnValueOnce(stateJSON);

    const storage = new GameStorage(testStorage);
    const result = storage.getGame(id);

    expect(typeof result).toBe('object');
    expect(result.puzzleId).toBe(id);
    expect(result.completed).toBe(completed);
    expect(result.tilesBoardState.length).toBe(keysState.length);
    for (var i = 0; i < keysState.length; i++) {
        expect(result.tilesBoardState[i]).toBe(keysState[i]);
    }
});

test('GameStorage.getGame 2', () => {
    const board = new TilesBoardModel().init(['a', 'v', 'f']);
    const puzzle = Puzzle.get(Puzzle.level.expert, 3);
    const completed = true;
    const keysState = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stateJSON = '{"puzzleId":"' + puzzle.id + '","tilesBoardState":[' + board.getTileKeysState() + '],"completed":' + completed + '}';
    
    const gameModel = {
        tilesBoard: board,
        puzzle: puzzle,
        started: true,
        completed: completed,
    };

    const testStorage = {
        setItem: jest.fn()
    }
    const storage = new GameStorage(testStorage);
    const result = storage.saveGame(gameModel);

    expect(testStorage.setItem.mock.calls.length).toBe(1);
    expect(testStorage.setItem.mock.calls[0][0]).toBe(puzzle.id, stateJSON);
    expect(testStorage.setItem.mock.calls[0][1]).toBe(stateJSON);
});