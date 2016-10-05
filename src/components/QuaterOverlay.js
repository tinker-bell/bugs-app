import React from 'react';
import {white, grey500} from 'material-ui/styles/colors';


const QuaterOverlay = React.createClass({

    render() {
        return <div style={QuaterOverlay.styles.quater} >
            <span style={QuaterOverlay.styles.value}>{this.props.value}</span>
        </div>
    }
});

QuaterOverlay.styles = {
    quater: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        padding: 15,
        margin: 15,
        borderRadius: '0 0 100% 0',
        backgroundColor: grey500,
        opacity: 0.7,
        zIndex: 15
    },
    value: {
        color: white,
        fontSize: '2.5em',
        fontWeight: 'bold'
    }
};

export default QuaterOverlay;