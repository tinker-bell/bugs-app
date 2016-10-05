import TilesBoardModel from '../TilesBoardModel'


test('TileBoardModel.constructor', ()=> {
    var board = new TilesBoardModel(3);
    var result = board.tiles;

    expect(result.length).toBe(3);
    expect(result[0].length).toBe(3);
    expect(result[1].length).toBe(3);
    expect(result[2].length).toBe(3);

    expect(result[0][0].key).toBe(0);
    expect(result[0][1].key).toBe(1);
    expect(result[0][2].key).toBe(2);
    expect(result[1][0].key).toBe(3);
    expect(result[1][1].key).toBe(4);
    expect(result[1][2].key).toBe(5);
    expect(result[2][0].key).toBe(6);
    expect(result[2][1].key).toBe(7);
    expect(result[2][2].key).toBe(8);

    expect(result[0][0]).toBe(board.emptyTile);
    expect(result[0][0].isEmpty).toBe(true);       
});

test('TileBoardModel._placeLabels', ()=> {
    var board = new TilesBoardModel(3);
    var result = board.tiles;

    board._placeLabels(result, ["G", "F", "E", "D", "C", "B", "A"]);

    expect(result[0][1].rightLabel).toBe("G");
    expect(result[0][2].leftLabel).toBe("G");

    expect(result[0][2].bottomLabel).toBe("F");
    expect(result[1][2].topLabel).toBe("F");

    expect(result[1][0].rightLabel).toBe("E");
    expect(result[1][1].leftLabel).toBe("E");

    expect(result[1][1].rightLabel).toBe("D");
    expect(result[1][2].leftLabel).toBe("D");

    expect(result[1][2].bottomLabel).toBe("C");
    expect(result[2][2].topLabel).toBe("C");

    expect(result[2][0].rightLabel).toBe("B");
    expect(result[2][1].leftLabel).toBe("B");

    expect(result[2][1].rightLabel).toBe("A");
    expect(result[2][2].leftLabel).toBe("A");
});

test('TileBoardModel._getTileByKey', ()=> {
    const board = new TilesBoardModel(3);
    expect(board._getTileByKey(board.tiles, 4)).toBe(board.tiles[1][1]);
    expect(board._getTileByKey(board.tiles, 7)).toBe(board.tiles[2][1]);
});

test('TileBoardModel._mixTilesByState', ()=> {
    const board = new TilesBoardModel(3);
    const state = [2, 5, 1, 3, 7, 8, 0, 4, 6];
    const result = board._mixTilesByState(board.tiles, state);
    state.reverse();

    for (var tile of board._items(result))
    {
        var keyFromState = state.pop();
        expect(tile.key).toBe(keyFromState);    
    }   
});

test('TileBoardModel._mixTiles', ()=> {
    const board = new TilesBoardModel(3);
    const tilesBefore = board.tiles; 
    const result = board._mixTiles(board.tiles);

    expect(result[0][0].key).toBe(0); // key 0
    expect(result[0][1].key).toBe(8); // key 8
    expect(result[0][2].key).toBe(6); // key 6
    expect(result[1][0].key).toBe(4); // key 4
    expect(result[1][1].key).toBe(7); // key 7
    expect(result[1][2].key).toBe(1); // key 1
    expect(result[2][0].key).toBe(5); // key 5
    expect(result[2][1].key).toBe(3); // key 3
    expect(result[2][2].key).toBe(2); // key 2
});

test('TileBoardModel.getTileNeighbor', ()=> {
    const board = new TilesBoardModel();
    board.init(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E']);

    expect(board.getTileNeighbor(board.tiles[1][2], "right")).toBe(null);
    expect(board.getTileNeighbor(board.tiles[1][2], "left")).toBe(board.tiles[1][1]);
    expect(board.getTileNeighbor(board.tiles[1][2], "top")).toBe(board.tiles[0][2]);
    expect(board.getTileNeighbor(board.tiles[1][2], "bottom")).toBe(board.tiles[2][2]);
});

test('TileBoardModel.init', ()=> {
    const board = new TilesBoardModel();
    board.init(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E']);

    expect(board.getTiles().length).toBe(9);
});

test('TileBoardModel.init without state', ()=> {
    const board = new TilesBoardModel(3);
    
    board._mixTiles = jest.fn()
    board._mixTilesByState = jest.fn()

    board.init(["A", "B", "C"]);

    expect(board._mixTiles.mock.calls.length).toBe(1);
    expect(board._mixTilesByState.mock.calls.length).toBe(0);
});

test('TileBoardModel.init with state', ()=> {
    const board = new TilesBoardModel(3);
    
    board._mixTiles = jest.fn()
    board._mixTilesByState = jest.fn()

    board.init(["A", "B", "C"], [0, 8, 7, 6, 5, 4, 3, 2, 1]);

    expect(board._mixTiles.mock.calls.length).toBe(0);
    expect(board._mixTilesByState.mock.calls.length).toBe(1);
});


test('TileBoardModel.getTileKeysState', ()=> {
    const boardSize = 3;
    const board = new TilesBoardModel(boardSize);
    board.init(["A", "B", "C"]);
    
    var result = board.getTileKeysState();
    var expected = [0, 8, 6, 4, 7, 1, 5, 3, 2]; 

    for (var i = 0; i < boardSize * boardSize; i++){
        expect(result[i]).toBe(expected[i]);
    }    
});

test('TileBoardModel.matchedPairsCount', ()=> {
    const board = new TilesBoardModel();
    const labels = ['A', 'B', 'C']; 
    board.init(labels);
    expect(board.pairsToMatchCount).toBe(labels.length);
    expect(board.matchedPairsCount()).toBe(0);
    board._orderTiles();
    expect(board.matchedPairsCount()).toBe(labels.length);
});



