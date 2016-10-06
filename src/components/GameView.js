import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TilesBoard from './TilesBoard'
import {deepOrange500} from 'material-ui/styles/colors';
import AvReplay  from 'material-ui/svg-icons/av/replay';
import FloatingActionButton from 'material-ui/FloatingActionButton';



const GameView = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },


    render() {
        return <div style={GameView.styles.container}>
            <TilesBoard isPreview={false} gameModel={this.props.gameModel} tilesSwap={this.onTilesSwap}/>

            <div className={'totalPanel'}>
                <div style={GameView.styles.total}>{this.props.gameModel.matchedPairsCount} / {this.props.gameModel.tilesBoard.pairsToMatchCount}</div>
                <FloatingActionButton
                    backgroundColor={this.context.muiTheme.fab.color}
                    >
                    <AvReplay color={this.context.muiTheme.palette.alternateTextColor} /></FloatingActionButton>
            </div>
            <FloatingActionButton
                    backgroundColor={this.context.muiTheme.fab.color}
                    >
                    </FloatingActionButton>
        </div>
    },
    //onClick={this.onRestartGameClick}

    onRestartGameClick(e) {
        if (this.props.restartGame) {
            this.props.restartGame(this.props.gameModel.puzzle);
        }
        console.log(e);
        e.preventDefault();
    },

    onTilesSwap() {
        if (this.props.tilesSwap) {
            this.props.tilesSwap(this.props.gameModel);
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
        width: '100%',
        alignItems: 'center',
    },
    total: {
        color: deepOrange500,
        fontSize: '2.5em',
        fontWeight: 'bold',
        textAlign: 'center',
    }
};

export default GameView;