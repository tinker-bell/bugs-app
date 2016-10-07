import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header'
import {fade} from 'material-ui/utils/colorManipulator';
import { green700, green600, deepOrange500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green700,
        primary2Color: green600,
        accent1Color: deepOrange500,
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