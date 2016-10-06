
export class TileModel {

    constructor(tileBoard, key) {
        this.tileBoard = tileBoard;
        this.key = key;
        this.isEmpty = false;
        this.updateHasMatch = false;
    }

    canMove() {
        const position = this.position;
        var moveTo = function (side) {
            var tile = this.tileBoard.getTileNeighbor(position.row, position.column, side);
            return tile !== null && tile.isEmpty;
        }
        moveTo = moveTo.bind(this);

        return moveTo("top") || moveTo("bottom") || moveTo("right") || moveTo("left");
    }


    // hasMatch() {
    //     this.updateHasMatch = false;
    //     const position = this.position;
    //     var matches = function (side) {
    //         return this.tileBoard.hasMatchBySide(this, position.row, position.column, side)
    //     };
    //     matches = matches.bind(this);

    //     return matches('right') || matches('left') || matches('bottom') || matches('top');
    // }

    get showMatch() {
        return this._showMatch;
    }

    showMatchOn() {
        this._showMatch = true;
    }

    showMatchOff() {
        this._showMatch = false;
    }

    get position() {
        return this.tileBoard.getPosition(this);
    }

    isMatching(tile, side) {
        if (!tile) {
            return false;
        }

        return (side === "right" && this.rightLabel && tile.leftLabel && this.rightLabel === tile.leftLabel) ||
            (side === "left" && this.leftLabel && tile.rightLabel && this.leftLabel === tile.rightLabel) ||
            (side === "top" && this.topLabel && tile.bottomLabel && this.topLabel === tile.bottomLabel) ||
            (side === "bottom" && this.bottomLabel && tile.topLabel && this.bottomLabel === tile.topLabel);
    }
}
;

export default TileModel;