import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Puzzle from '../models/Puzzle';
import Games from '../models/Games';
import GameStorage from '../models/GameStorage';
import NotFound from './NotFound'
import TilesBoard from './TilesBoard'

const muiTheme = getMuiTheme();

var PlayGame = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    // getInitialState() {
    //     var getLevel = function (location) {
    //         var matches = /^\/(\w+)\/+/.exec(location);
    //         console.log(matches);
    //         return (matches && matches.length >= 2) ? matches[1] : 'beginner';
    //     };

    //     var tilesBoard =  TilesBoardFactory.createTilesBoard(getLevel(this.props.location.pathname), this.props.params.id);        

    //     return { puzzles: puzzles };
    // },

    getDefaultProps: function () {
        return {
            games: new Games(new GameStorage(window.localStorage)), 
        };
    },

    render() {
        var isValidPuzzleNumber = this.props.params && this.props.params.level && this.props.params.puzzleNumber && Puzzle.isValidPuzzleNumber(this.props.params.level, this.props.params.puzzleNumber);
        var isValidAction = this.props.params && this.props.params.action && Games.isValidAction(this.props.params.action);

        if (!isValidAction || !isValidPuzzleNumber) {
            return <NotFound/>;
        }

        var puzzle = Puzzle.get(this.props.params.level, this.props.params.puzzleNumber);
        var game = this.props.games.resumeGame(puzzle, false);      

        console.log('isvalidAction ' + isValidAction);
        console.log('isValidPuzzleNumber ' + isValidPuzzleNumber);
        console.log(this.props)
        return ( 
            <div>
            <TilesBoard isPreview={false} gameModel={game} tilesSwap={this.onTilesSwap}/>

            <FlatButton label="Играть сначала" primary={true} onClick={this.onClick} />

            <p/>
            {this.props.params.level}
            <p/>
            {this.props.params.puzzleNumber}
            <p/>
            {typeof (this.props.params.action) }
            <p/>
            end</div>);
    },

    onClick(ev){
        console.log( this);
    },

    onTilesSwap(gameModel) {
        console.log(this.props);
        
        this.props.games.saveGame(gameModel)
    },
});

export default PlayGame;