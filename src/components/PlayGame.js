import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Puzzle from '../models/Puzzle';
import Games from '../models/Games';
import GameStorage from '../models/GameStorage';
import NotFound from './NotFound'
import TilesBoard from './TilesBoard'
import GameView from './GameView'

const muiTheme = getMuiTheme();

var PlayGame = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    getDefaultProps: function () {
        return {
            games: new Games(new GameStorage(window.localStorage)),
        };
    },

    render() {
        console.log('render play game');
        var isValidPuzzleNumber = this.props.params && this.props.params.level && this.props.params.puzzleNumber && Puzzle.isValidPuzzleNumber(this.props.params.level, this.props.params.puzzleNumber);
        var isValidAction = this.props.params && this.props.params.action && Games.isValidAction(this.props.params.action);

        if (!isValidAction || !isValidPuzzleNumber) {
            return <NotFound/>;
        }

        var puzzle = Puzzle.get(this.props.params.level, this.props.params.puzzleNumber);
        var game = this.props.games.resumeGame(puzzle, false);

        return (
            <div style={PlayGame.styles.container}>
                <GameView gameModel={game} tilesSwap={this.onTilesSwap}/>
                
                <div style={PlayGame.styles.breakLine}/>
                <FlatButton label="Играть сначала" primary={true} onClick={this.onRestartGameClick} />
<div style={PlayGame.styles.breakLine}/>
                <p/>
                {this.props.params.level}
                <p/>
                {this.props.params.puzzleNumber}
                <p/>
                {typeof (this.props.params.action) }
                <p/>
                end</div>);
    },

    //<TilesBoard isPreview={false} gameModel={game} tilesSwap={this.onTilesSwap}/>

    onRestartGameClick(ev) {
        var puzzle = Puzzle.get(this.props.params.level, this.props.params.puzzleNumber);
        this.props.games.restartGame(puzzle);
        this.forceUpdate();
    },

    onTilesSwap(gameModel) {
        this.props.games.saveGame(gameModel)
    },
});


PlayGame.styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    breakLine: {
        width: '100%',
    }

}

export default PlayGame;