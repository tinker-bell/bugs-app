import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
// import IconButton from 'material-ui/IconButton';
// import ToggleStar  from 'material-ui/svg-icons/toggle/star';
import AvPlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import {fullWhite, greenA400, grey500} from 'material-ui/styles/colors';
import AvReplay  from 'material-ui/svg-icons/av/replay';
import AvPlay  from 'material-ui/svg-icons/av/play-arrow';
import Grade  from 'material-ui/svg-icons/action/grade';
import Extension  from 'material-ui/svg-icons/action/extension';
import RestorePage  from 'material-ui/svg-icons/action/restore-page';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import TilesBoard from './TilesBoard';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const buttonsStyle = {
    margin: '-32px 15px 0px 0px',
}

const style = {
    margin: 15,
    padding: 10,
    //width: '250 px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
};

const styleCircle = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    padding: 15,
    margin: 15,
    borderRadius: '0 0 100% 0',
    backgroundColor: grey500,
    opacity: 0.7,
    zIndex: 15

};
 
var PuzzleCard = React.createClass({
    render() {
        var toPlayButton = (this.props.linkToPlay) ? this.toPlayButton() : null;
        var toReplayButton = (this.props.linkToReplay) ? this.toReplayButton() : null;
        var toContinueButton = (this.props.linkToContinue) ? this.linkToContinue() : null;

        return <div style={{ position: 'relative' }}>
            <div style={styleCircle} >
            <span style={{color: fullWhite, fontSize: '2.5em', fontWeight: 'bold' }}>{this.props.puzzleNumber}</span>
            </div>
            <Paper zDepth={1} style={style}>

                <TilesBoard isPreview={true} gameModel={this.props.gameModel} style={{ marginRight: '0', marginLeft: '0' }} />

                <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '5px' }}>
                    {toPlayButton}
                    {toReplayButton}
                    {toContinueButton}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap'}}>
                <Extension color={greenA400} /><Extension color={greenA400}  style={{opacity: 0.5}}/><Extension color={greenA400} style={{opacity: 0.5}} /></div>

            </Paper>

        </div>
    },

    //     <div>
    // <CardText>Завершено</CardText>
    // < LinearProgress mode="determinate" value={0} style={{margin: '10px'}} />
    // </div>

    toReplayButton() {
        return <FloatingActionButton backgroundColor={greenA400} style={buttonsStyle}  href={this.props.linkToReplay} >
            <AvReplay color={fullWhite} /></FloatingActionButton>
        //return <RaisedButton label="Играть" primary={true} href={this.props.linkToPlay} />;
        //return <RaisedButton icon={<AvReplay color={fullWhite} /> } backgroundColor={greenA400} style={buttonsStyle} primary={true} href={this.props.linkToReplay} />
    },


    toPlayButton() {
        return <FloatingActionButton backgroundColor={greenA400} style={buttonsStyle}  href={this.props.linkToPlay} >
            <AvPlay color={fullWhite} /></FloatingActionButton>
        //return <RaisedButton label="Играть" primary={true} href={this.props.linkToPlay} />;
        //return <RaisedButton icon={<AvPlay color={fullWhite} /> } backgroundColor={greenA400} style={buttonsStyle} primary={true} href={this.props.linkToPlay} />
    },

    linkToContinue() {
        return <FloatingActionButton backgroundColor={greenA400} style={buttonsStyle} href={this.props.linkToContinue} >
            <AvPlayCircleOutline color={fullWhite} /></FloatingActionButton>
        //<FlatButton label="Продолжить" primary={true} href={this.props.linkToContinue} /> : null;
        //        return <RaisedButton icon={<AvPlayCircleOutline color={fullWhite} /> } backgroundColor={greenA400} style={buttonsStyle} primary={true} href={this.props.linkToContinue} />
    }

});



export default PuzzleCard;
//<RaisedButton label="Играть" primary={true} href={this.props.RaisedButton} />
            // <FlatButton label="Primary" primary={true} />
            // <IconButton href={this.props.linkToPlay}>
            // <AvPlayCircleFilled/>
            // </IconButton>
            // <ToggleStar/>