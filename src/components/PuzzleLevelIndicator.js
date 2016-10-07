import React from 'react';
import Puzzle from '../models/Puzzle'
import Extension  from 'material-ui/svg-icons/action/extension';


const PuzzleLevelIndicator = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    render() {
        var iconColor = this.context.muiTheme.palette.primary2Color;
        return <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap' }}>
            { this.getIndicatorStyles(this.props.level).map(x => <Extension color={iconColor}  style={x[1]} key={x[0]}/>) }
        </div>
    },

    getIndicatorStyles(level) {
        var transparentStyle = { opacity: 0.5 };
        switch (level) {
            case Puzzle.level.beginner:
                return [[1, null], [2, transparentStyle], [3, transparentStyle]];
            case Puzzle.level.master:
                return [[1, null], [2, null], [3, transparentStyle]];
            default:
                return [[1, null], [2, null], [3, null]];
        }
    }
});

export default PuzzleLevelIndicator;

