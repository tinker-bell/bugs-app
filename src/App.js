import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header'
import {fade} from 'material-ui/utils/colorManipulator';
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
    greenA700, greenA400, green700, green600,
    limeA400,
    deepOrange500




} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green700,
        primary2Color: green600,
        primary3Color: grey400,
        accent1Color: deepOrange500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        secondaryTextColor: fade(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
    appBar: {
        height: 50,
    },
    tabs:{
        backgroundColor: green600,
    },
    fab:{
        color: deepOrange500,
    }

});

    // inkBar: {
    //     backgroundColor: greenA400,
    // }


var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    getChildContext() {
        return { muiTheme: getMuiTheme() };
    },

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header pathname={this.props.location.pathname}/>
                    <div>
                        {this.props.children}
                    </div>



                </div>
            </MuiThemeProvider>
        );
    },
});

export default App;

















