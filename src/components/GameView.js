import React from 'react';
import TilesBoard from './TilesBoard'
import {deepOrange500} from 'material-ui/styles/colors';
import AvReplay  from 'material-ui/svg-icons/av/replay';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PuzzleLevelIndicator from './PuzzleLevelIndicator'
import UIUtils from './UIUtils'


const GameView = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },


    render() {
        return <div style={{ display: 'flex', justifyContent:'center' }}>
            <div style={GameView.styles.container}>
                <div style={GameView.styles.text}>
                    {UIUtils.puzzleTitle(this.props.gameModel.puzzle) }
                    <PuzzleLevelIndicator level={this.props.gameModel.puzzle.level}/></div>

                <div className={'tilesBoardContainer shadowBox'} >
                    <TilesBoard isPreview={false} gameModel={this.props.gameModel} tilesSwap={this.onTilesSwap}/>
                </div>

                <div style={GameView.styles.bottomPanel}>
                    <div style={GameView.styles.total}>{this.props.gameModel.matchedPairsCount} / {this.props.gameModel.tilesBoard.pairsToMatchCount}</div>
                    <FloatingActionButton backgroundColor={this.context.muiTheme.fab.color} onClick={this.onRestartGameClick}>
                        <AvReplay color={this.context.muiTheme.palette.alternateTextColor} />
                    </FloatingActionButton>
                </div>
            </div>
        </div>
    },

    onRestartGameClick() {
        if (this.props.restartGame) {
            this.props.restartGame(this.props.gameModel.puzzle);
        }
    },

    onTilesSwap() {
        if (this.props.tilesSwap) {
            this.props.tilesSwap(this.props.gameModel);
        }
        this.forceUpdate();
    }
});

GameView.styles = {
    bottomPanel: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
        alignItems:'center',
        marginLeft: '16px',
        marginRight: '16px',
    },
    total: {
        color: deepOrange500,
        fontSize: '2.5em',
        fontWeight: 'bold',
        textAlign: 'center',        
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        fontSize: '18px',
        marginBottom: '16px',
    },
};

export default GameView;