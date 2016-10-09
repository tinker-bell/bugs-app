import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';

const NotFound = React.createClass({
    render(){
        return <div style={{display: 'flex', justifyContent:'center', alignItems:'center', color: deepOrange500, fontSize: '36px'}}>{'Not Found ;)'}</div>;
    }
});

export default NotFound;