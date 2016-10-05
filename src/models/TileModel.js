
export class TileModel {

    constructor(tileBoard, key) {
        this.tileBoard = tileBoard;
        this.key = key;
        this.isEmpty = false;
    }

    canMoveTo(side) {
        var tile = this.tileBoard.getTileNeighbor(this, side);
        return tile !== null && tile.isEmpty;
    }

    canMove() {
        return this.canMoveTo("top") || this.canMoveTo("bottom") ||
            this.canMoveTo("right") || this.canMoveTo("left");
    }

    get position(){
        return this.tileBoard.getPosition(this);
    }
}
;

export default TileModel;