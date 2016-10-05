import TileModel from './TileModel'
import {Iter} from '../Utils'

class TilesBoardModel {
    constructor(boardSize = 3) {
        this.boardSize = boardSize
        this.tiles = this._createNewTiles(boardSize);
        this.emptyTile = this.tiles[0][0];
        this.emptyTile.isEmpty = true;
    }

    init(labels, state = null) {
        this.labels = labels;
        this._placeLabels(this.tiles, labels);
        this.tiles = (state === null) ? this._mixTiles(this.tiles) : this._mixTilesByState(this.tiles, state);

        return this;
    }

    getTileKeysState() {
        return Iter.toArray(this._items(this.tiles), x => x.key);
    }

    _createNewTiles(boardSize) {
        var key = 0;
        var newTiles = [];
        for (var row = 0; row < boardSize; row++) {
            newTiles[row] = [];
            for (var column = 0; column < boardSize; column++) {
                newTiles[row][column] = new TileModel(this, key);
                key++;
            }
        }
        return newTiles;
    }

    _rotateMatrix(matrix) {
        var rotated = [];
        var size = matrix[0].length;
        for (var column = 0; column < size; column++) {
            var m = [];
            for (var row = 0; row < size; row++) {
                m[size - 1 - row] = matrix[row][column];
            }
            rotated[column] = m;
        }
        return rotated;

    }

    _swapTilesFromTopToBottom(tiles) {
        var go_right = true;
        var size = tiles[0].length;

        // Walk through the whole board row by row from top to bottom
        for (let row = 0; row < size; row++) {
            var column = 0;
            // Walk the row from left to right (stop if row is the last one)
            if (go_right && row < size - 1) {
                for (column = 0; column < size - 1; column++) {
                    this._swap(tiles, row, column, row, column + 1);
                }
            }
            // or from right to left
            else if (!go_right) {
                for (column = size - 1; column > 0; column--) {
                    this._swap(tiles, row, column, row, column - 1);
                }
            }

            // jump to the next row
            if (row + 1 < size) {
                this._swap(tiles, row, column, row + 1, column);
            }
            // change direction, walk back
            go_right = !go_right
        }
        return tiles;
    }

    // Move first empty tile along the board to imitate random board shaking
    _mixTiles(tiles) {
        var temp_tiles = this._swapTilesFromTopToBottom(tiles);
        temp_tiles = this._rotateMatrix(temp_tiles);
        temp_tiles = this._swapTilesFromTopToBottom(temp_tiles);
        temp_tiles = this._rotateMatrix(temp_tiles);
        return temp_tiles;
    }

    _mixTilesByState(tiles, state) {
        // TODO: refactoring this and createNewTiles
        var mixedTiles = [];
        var stateCopy = state.slice().reverse();
        for (var row = 0; row < tiles[0].length; row++) {
            mixedTiles[row] = [];
            for (var column = 0; column < tiles[0].length; column++) {
                var keyFromState = stateCopy.pop();
                if (keyFromState === undefined) {
                    throw Error("keyFromState is undefined");
                }
                var tileByKey = this._getTileByKey(tiles, keyFromState);
                if (tileByKey === null) {
                    throw Error("tileByKey is null");
                }
                mixedTiles[row][column] = tileByKey;
            }
        }
        return mixedTiles;
    }

    _getTileByKey(tiles, key) {
        return Iter.find(this._items(tiles), x => x.key === key);
    }

    swapWithEmpty(row, column) {
        var emptyPos = this.getPosition(this.emptyTile);
        this._swap(this.tiles, row, column, emptyPos.row, emptyPos.column)
    }

    swapTiles(tile1, tile2) {
        var pos1 = this.getPosition(tile1);
        var pos2 = this.getPosition(tile2);
        this._swap(this.tiles, pos1.row, pos1.column, pos2.row, pos2.column);
    }

    swap(tile1Row, tile1Column, tile2Row, tile2Column) {
        this._swap(this.tiles, tile1Row, tile1Column, tile2Row, tile2Column);
    }

    _swap(tiles, tile1Row, tile1Column, tile2Row, tile2Column) {
        var tile1 = tiles[tile1Row][tile1Column];
        var tile2 = tiles[tile2Row][tile2Column];
        tiles[tile1Row][tile1Column] = tile2;
        tiles[tile2Row][tile2Column] = tile1;
    }

    getByPosition(row, column) {
        return (row >= 0 && row < this.boardSize && column >= 0 && column < this.boardSize) ?
            this.tiles[row][column] : null;
    }

    getPosition(tile) {
        for (var row = 0; row < this.boardSize; row++) {
            for (var column = 0; column < this.boardSize; column++) {
                if (this.tiles[row][column] === tile) {
                    return { row: row, column: column };
                }
            }
        }
        return null;
    }

    getTileNeighbor(tile, side) {
        for (var row = 0; row < this.boardSize; row++) {
            for (var column = 0; column < this.boardSize; column++) {
                if (this.tiles[row][column] === tile) {
                    return this._getTileBySide(this.tiles, row, column, side);
                }
            }
        }
        return null;
    }

    _getTileBySide(tiles, row, column, side) {
        switch (side) {
            case "left":
                return (column > 0) ? tiles[row][column - 1] : null;
            case "right":
                return (column < tiles[0].length - 1) ? tiles[row][column + 1] : null;
            case "top":
                return (row > 0) ? tiles[row - 1][column] : null;
            default:
                return (row < tiles[0].length - 1) ? tiles[row + 1][column] : null;
        }
    }

    _placeLabels(tiles, labels) {
        var labelsReversed = labels.slice().reverse();
        for (var row = 0; row < tiles[0].length; row++) {
            for (var column = 0; column < tiles[0].length; column++) {
                var tile = tiles[row][column];
                if (tile.isEmpty) {
                    continue;
                }

                var label = labelsReversed.pop();
                if (label === undefined) {
                    break;
                }
                if (label === null) {
                    continue;
                }

                var rightTile = this._getTileBySide(tiles, row, column, "right");
                if (rightTile !== null) {
                    tile.rightLabel = label;
                    rightTile.leftLabel = label;
                } else {
                    var bottomTile = this._getTileBySide(tiles, row, column, "bottom");
                    if (bottomTile !== null) {
                        tile.bottomLabel = label;
                        bottomTile.topLabel = label;
                    }
                }
            }
        }
    }

    *_items(matrix) {
        for (var i = 0; i < matrix[0].length; i++) {
            for (var j = 0; j < matrix[0].length; j++) {
                yield matrix[i][j];
            }
        }
    }

    getTiles() {
        //return [...(this._items(this.tiles))];
        return Iter.toArray(this._items(this.tiles));
    }
}
;

export default TilesBoardModel;

