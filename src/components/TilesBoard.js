import React from 'react';
import Tile from './Tile';


var TilesBoard = React.createClass({

    render() {
        console.log('render tileboard');
        var isPreview = this.props.isPreview;
        
        var createTile = function (tile) {
            var canMove = !isPreview && tile.canMove();
            return <Tile key={tile.key}
                position={tile.position}
                isEmpty={tile.isEmpty}
                isDraggable={canMove}
                topLabel={tile.topLabel}
                bottomLabel={tile.bottomLabel}
                rightLabel={tile.rightLabel}
                leftLabel={tile.leftLabel}
                swapTiles={this.onSwapTiles}
                isPreview={isPreview}/>;
        };

        var style = this.props.isPreview ? "dndTilesBoardThumbnail" : "dndTilesBoard";
        var tiles = this.props.gameModel.tilesBoard.getTiles(); 

        return <div className={style}>{tiles.map(createTile.bind(this)) }</div>;
    },

    onSwapTiles(row, column) {
        this.props.gameModel.swapTile(row, column);
        
        if (this.props.tilesSwap){
            this.props.tilesSwap(this.props.gameModel);
        }
        this.forceUpdate();
    }
});

export default TilesBoard;