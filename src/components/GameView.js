import React from 'react';
import TilesBoard from './TilesBoard'
import {deepOrange500} from 'material-ui/styles/colors';
import AvReplay  from 'material-ui/svg-icons/av/replay';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PuzzleLevelIndicator from './PuzzleLevelIndicator'
import UIUtils from './UIUtils'
import PuzzlePaging from './PuzzlePaging'
import Puzzle from '../models/Puzzle'

const GameView = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    componentDidUpdate(prevProps, prevState) {
        this.onSaveLastGame();
    },

    componentDidMount() {
        this.onSaveLastGame();
    },

    render() {
        const gameModel = this.props.gameModel;
        const puzzle = this.props.gameModel.puzzle;
        const pagingItems = Puzzle.getByLevel(puzzle.level).map(x => x.num);
        return <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <PuzzlePaging
                    leftLink={UIUtils.linkToPlayGame(puzzle.previous()) }
                    rightLink={UIUtils.linkToPlayGame(puzzle.next()) }
                    selectedItem={puzzle.num}
                    items={pagingItems}/>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '1.5em', color: this.context.muiTheme.palette.primary1Color }} >
                    <span>{puzzle.num}&nbsp; </span>
                    <PuzzleLevelIndicator level={puzzle.level } color={this.context.muiTheme.palette.primary1Color}/>
                </div>


                <div className={'gameViewContainer'}>
                    <div className={'tilesBoardContainer shadowBox'} >
                        <TilesBoard isPreview={false} gameModel={gameModel} tilesSwap={this.onTilesSwap}/>
                    </div>

                    <div className={'totalPanel'}>
                        <FloatingActionButton backgroundColor={this.context.muiTheme.fab.color} onClick={this.onRestartGameClick}>

                            <AvReplay color={this.context.muiTheme.palette.alternateTextColor} />
                        </FloatingActionButton>
                        <div style={GameView.styles.total} className={'score'}>{gameModel.matchedPairsCount} / {gameModel.tilesBoard.pairsToMatchCount}</div>

                    </div>
                </div>
            </div>
        </div>
    },

    onSaveLastGame() {
        if (this.props.saveLastGame) {
            this.props.saveLastGame(this.props.gameModel);
        }
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
    total: {
        color: deepOrange500,
        fontSize: '2.5em',
        fontWeight: 'bold',
    },
};

export default GameView;