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
        const games  = this.props.games;
        console.log(params);
        if (!params || (!params.level && !params.puzzleNumber)){
            return this.renderGame(games.resumeLastOrDefaultGame());
        }

        const action = params && params.action;
        const level = params && params.level;
        const puzzleNumber = params && params.puzzleNumber;

        if (!Puzzle.isValidPuzzleNumber(level, puzzleNumber)) {
            return <NotFound/>;
        }

        var puzzle = Puzzle.get(level, puzzleNumber);
        if (action === Games.action.restart) {
            this.props.games.restartGame(puzzle);
        }

        return this.renderGame(games.resumeGame(puzzle, false));
    },

    renderGame(game) {
        return <div style={PlayGame.styles.container}>
            <GameView gameModel={game} tilesSwap={this.onSaveGame} restartGame={this.onRestartGame} saveLastGame={this.onSaveGame}/>
        </div>;
    },

    onSaveGame(gameModel){
        this.props.games.saveGame(gameModel);
    },

    onRestartGame(puzzle) {
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
        marginBottom: '50px',
    },
    breakLine: {
        width: '100%',
    }
}

export default PlayGame;