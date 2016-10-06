import React from 'react';
import Puzzle from '../models/Puzzle';
import Games from '../models/Games';
import GameStorage from '../models/GameStorage';
import NotFound from './NotFound'
import GameView from './GameView'

var PlayGame = React.createClass({

    contextTypes: {
        router: React.PropTypes.object,
        muiTheme: React.PropTypes.object.isRequired,
    },

    getDefaultProps: function () {
        return {
            games: new Games(new GameStorage(window.localStorage)),
        };
    },

    render() {
        const params = this.props.params;
        const action = params && params.action;
        const level = params && params.level;
        const puzzleNumber = params && params.puzzleNumber;

        if (!Games.isValidAction(action) || !Puzzle.isValidPuzzleNumber(level, puzzleNumber)) {
            return <NotFound/>;
        }

        var puzzle = Puzzle.get(level, puzzleNumber);
        if (action === Games.action.play) {
            this.props.games.restartGame(puzzle);
        }

        var game = this.props.games.resumeGame(puzzle, false);

        return (<div style={PlayGame.styles.container}>
                <GameView gameModel={game} tilesSwap={this.onTilesSwap} restartGame={this.onRestartGame}/>
                </div>);
    },

    onTilesSwap(gameModel) {
        this.props.games.saveGame(gameModel)
    },

    onRestartGame(puzzle){
        this.props.games.restartGame(puzzle);
        this.forceUpdate();
    }
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