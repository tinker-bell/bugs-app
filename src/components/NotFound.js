import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme();

const NotFound = React.createClass({
    render(){
        return <div>{'Not Found'}</div>;
    }
});

export default NotFound;