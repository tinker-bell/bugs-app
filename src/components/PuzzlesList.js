import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PuzzleCard from './PuzzleCard';
import {Games} from '../models/Games';
import GameStorage from '../models/GameStorage';
import Puzzle from '../models/Puzzle';
import NotFound from './NotFound'
import UIUtils from './UIUtils'
import {Iter} from '../Utils'


const muiTheme = getMuiTheme();

const PuzzlesList = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    render() {
        var level = (this.props.params && this.props.params.level) ? this.props.params.level : Puzzle.level.beginner;
        if (!Puzzle.isValidLevel(level)) {
            return <NotFound/>;
        }

        var games = new Games(new GameStorage(window.localStorage)).gamesForLevel(level, true);

        function* puzzleCards(games) {
            var key = 0;

            for (var i = 0; i < games.length; i++) {
                var game = games[i];
                var linkToPlay = (!game.started) ? UIUtils.linkToPlayGame(game.puzzle) : null;
                var linkToReplay = (game.started) ? UIUtils.linkToReplay(game.puzzle) : null;
                var linkToContinue = (game.started && !game.completed) ? UIUtils.linkToContinue(game.puzzle) : null;

                yield <PuzzleCard key={key++}
                    gameModel={game}
                    title="#1"
                    isThumbnail={true}
                    linkToPlay={linkToPlay}
                    linkToReplay={linkToReplay}
                    linkToContinue={linkToContinue}
                    puzzleNumber={game.puzzle.num}/>;
            }
        };

        return <div>
            <div className={'puzzlesList'}>
                { Iter.toArray(puzzleCards(games)) }
            </div>
        </div>;

    }
});

export default PuzzlesList;