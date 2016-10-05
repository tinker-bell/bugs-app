import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TilesBoard from './TilesBoard'


const muiTheme = getMuiTheme();

const GameView = React.createClass({
    render() {
console.log("GameView render");
console.log(this.props.gameModel.tilesBoard.matchedPairsCount);
console.log(this.props.gameModel.tilesBoard.pairsToMatchCount);
        return <div style={GameView.styles.container}>
            <TilesBoard isPreview={false} gameModel={this.props.gameModel} tilesSwap={this.onTilesSwap}/>
            <p/>
            {this.props.gameModel.tilesBoard.matchedPairsCount}
            <p/>
            {this.props.gameModel.tilesBoard.pairsToMatchCount}
        </div>
    },

    onTilesSwap() {
        if (this.tilesSwap) {
            this.tileSwap(this.props.gameModel);
        }
        this.forceUpdate();
    }
});

GameView.styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
    },
};

export default GameView;