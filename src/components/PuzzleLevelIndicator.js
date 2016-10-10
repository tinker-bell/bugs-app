import React from 'react';
import Puzzle from '../models/Puzzle'
import FontIcon from 'material-ui/FontIcon';


const PuzzleLevelIndicator = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    render() {
        var iconColor = this.props.color ? this.props.color : this.context.muiTheme.palette.alternateTextColor; 
        return <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap' }}>
            { this.getIndicatorStyles(this.props.level).map(x => <FontIcon className="material-icons" color={iconColor}  style={x[1]} key={x[0]}>bug_report</FontIcon>) }
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

