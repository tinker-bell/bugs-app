import React from 'react';
import Paper from 'material-ui/Paper';
import TilesBoard from './TilesBoard';
import CardOverlay from './CardOverlay'
import DoneAll  from 'material-ui/svg-icons/action/done-all';
import AvReplay  from 'material-ui/svg-icons/av/replay';
import UIUtils from './UIUtils'


var PuzzleCard = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    render() {
        return <div style={{ position: 'relative', margin: '15px' }}>

            <Paper zDepth={2}>
                <div style={{ marginBottom: '0px', display: 'flex' }}>
                    <a href={this.primaryActionLink() }>
                        <div style={{ backgroundColor: "transparent", width: '100%', height: '100%', position: 'absolute', zIndex: 5 }}></div>
                    </a>
                    <TilesBoard isPreview={true} gameModel={this.props.gameModel} />
                    <CardOverlay value={this.props.puzzleNumber}
                        secondaryActionLink={this.secondaryActionLink() }
                        secondaryActionIcon={this.secondaryActionIcon() }
                        firstLineText={this.firstLineText() }
                        secondLineIcon={this.secondLineIcon() }
                        secondLineText={this.secondLineText() } />
                </div>
            </Paper>
        </div>
    },

    primaryActionLink() {
        return this.props.linkToContinue ? this.props.linkToContinue : this.props.linkToPlay;
    },

    secondaryActionLink() {
        return this.props.linkToReplay;
    },

    secondaryActionIcon() {
        return this.props.linkToReplay ? <AvReplay color={this.context.muiTheme.palette.alternateTextColor} /> : null;
    },

    secondLineIcon() {
        return this.props.gameModel.completedFromState ? <DoneAll style={{ width: '16px', height: '16px' }} color={this.context.muiTheme.palette.alternateTextColor}/> : null;
    },

    secondLineText() {
        return this.props.gameModel.completedFromState ? 'Завершено' : null;
    },

    firstLineText() {
        return UIUtils.puzzleTitle(this.props.gameModel.puzzle);
    },
});



export default PuzzleCard;
