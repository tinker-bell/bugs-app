import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AvPlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import AvReplay  from 'material-ui/svg-icons/av/replay';
import AvPlay  from 'material-ui/svg-icons/av/play-arrow';
import Paper from 'material-ui/Paper';
import TilesBoard from './TilesBoard';
import PuzzleLevelIndicator from './PuzzleLevelIndicator';
import QuaterOverlay from './QuaterOverlay'
import DoneAll  from 'material-ui/svg-icons/action/done-all';


var PuzzleCard = React.createClass({
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    render() {
        return <div style={{ position: 'relative' }}>
            <QuaterOverlay value={this.props.puzzleNumber}/>

            <Paper zDepth={1} style={PuzzleCard.styles.paper}>

                <TilesBoard isPreview={true} gameModel={this.props.gameModel} />

                <div style={PuzzleCard.styles.fabContainer}>
                    {this.replayButton() }
                    {this.playButton() }
                    {this.continueButton() }
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', alignItems: 'center' }}>
                    <PuzzleLevelIndicator level={this.props.gameModel.puzzle.level}/>
                    { this.doneIndicator()} </div>
            </Paper>
        </div>
    },

    doneIndicator() {
        return this.props.gameModel.completedFromState ? <DoneAll color={this.context.muiTheme.palette.accent1Color} style={{ marginLeft: '15px' }}/> : null;
    },

    // TODO think of smth better
    replayButton() {
        return this.props.linkToReplay ? <FloatingActionButton
            backgroundColor={this.context.muiTheme.fab.color}
            style={PuzzleCard.styles.fab}
            href={this.props.linkToReplay} >
            <AvReplay color={this.context.muiTheme.palette.alternateTextColor} /></FloatingActionButton> : null;
    },

    playButton() {
        return this.props.linkToPlay ? <FloatingActionButton
            backgroundColor={this.context.muiTheme.fab.color}
            style={PuzzleCard.styles.fab}
            href={this.props.linkToPlay} >
            <AvPlay color={this.context.muiTheme.palette.alternateTextColor} /></FloatingActionButton> : null;
    },

    continueButton() {
        return this.props.linkToContinue ? <FloatingActionButton
            backgroundColor={this.context.muiTheme.fab.color}
            style={PuzzleCard.styles.fab}
            href={this.props.linkToContinue} >
            <AvPlayCircleOutline color={this.context.muiTheme.palette.alternateTextColor} /></FloatingActionButton> : null;
    },
});

PuzzleCard.styles = {
    fab: {
        margin: '-32px 15px 0px 0px',
    },

    fabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '5px'
    },

    paper: {
        margin: 15,
        padding: 10,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
    },
};


export default PuzzleCard;
