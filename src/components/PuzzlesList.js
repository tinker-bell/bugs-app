import React from 'react';
import PuzzleCard from './PuzzleCard';
import {Games} from '../models/Games';
import GameStorage from '../models/GameStorage';
import Puzzle from '../models/Puzzle';
import NotFound from './NotFound'
import UIUtils from './UIUtils'
import {Iter} from '../Utils'


const PuzzlesList = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    getDefaultProps: function () {
        return {
            games: new Games(new GameStorage(window.localStorage)),
        };
    },


    render() {
        var level = (this.props.params && this.props.params.level) ? this.props.params.level : Puzzle.level.beginner;
        if (!Puzzle.isValidLevel(level)) {
            return <NotFound/>;
        }

        var games =this.props.games.gamesForLevel(level, true);

        function* puzzleCards(games) {
            var key = 0;

            for (var i = 0; i < games.length; i++) {
                var game = games[i];
                var linkToPlay = UIUtils.linkToPlayGame(game.puzzle);
                var linkToRestart = (game.started) ? UIUtils.linkToRestartGame(game.puzzle) : null;

                yield <PuzzleCard key={key++}
                    gameModel={game}
                    title="#1"
                    isThumbnail={true}
                    linkToPlay={linkToPlay}
                    linkToRestart={linkToRestart}/>;
                if (!!i && !!(i % 2)) {
                    yield <div style={{ width: '100%' }} key={key++}/>
                }
            }
        };

        return <div>
            <div style={PuzzlesList.styles.container}>
                { Iter.toArray(puzzleCards(games)) }
            </div>
        </div>;
    }
});

PuzzlesList.styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
};

export default PuzzlesList;