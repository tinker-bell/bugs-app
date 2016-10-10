import React from 'react';
import IconButton from 'material-ui/IconButton'
import {white, grey800} from 'material-ui/styles/colors';


const CardOverlay = React.createClass({

    render() {
        return <div style={CardOverlay.styles.container} >
            <div style={ CardOverlay.styles.backgroundLayer }></div>
            <div style={ CardOverlay.styles.textLayer }>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={CardOverlay.styles.firstLineText}>{this.props.firstLineText}</div>
                    <div style={{ marginLeft: '16px', marginTop: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {this.secondLineIcon() }
                        <div style={CardOverlay.styles.secondLineText}>{this.props.secondLineText}</div>
                    </div>
                </div>
                <div style={{ width: '58px', position: 'relative', display: 'flex', alignItems: 'center', }}>{this.secondaryAction() }</div>
            </div>            
        </div>
    },

    secondLineIcon() {
        return this.props.secondLineIcon ? this.props.secondLineIcon : null;
    },

    secondaryAction() {
        if (this.props.secondaryActionIcon && this.props.secondaryActionLink) {
            return <IconButton touch={true} href={this.props.secondaryActionLink}>
                {this.props.secondaryActionIcon}
            </IconButton>
        }
        return null;
    }

});

CardOverlay.styles = {
    container: {
        position: 'absolute',
        width: '100%',
        height: '68px',
        left: '0',
        bottom: '0',
        zIndex: 11,
    },
    textLayer: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-between',
    },
    backgroundLayer: {
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: grey800,
        opacity: 0.6,
    },
    firstLineText: {
        color: white,
        fontSize: '18px',
        marginTop: '16px',
        marginLeft: '16px',
        display: 'flex'
    },
    secondLineText: {
        color: white,
        fontSize: '12px',
        marginLeft: '5px'
    }
};

export default CardOverlay;