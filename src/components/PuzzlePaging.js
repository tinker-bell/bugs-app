import React from 'react';
import IconButton from 'material-ui/IconButton'
import {grey400} from 'material-ui/styles/colors';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';


const PuzzlePaging = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },


    render() {
        const circles = function (item) {
            const color = item === this.props.selectedItem ? this.context.muiTheme.palette.accent1Color : grey400;
            return <div style={{ borderRadius: '50%', backgroundColor: color, width: '10px', height: '10px', margin: '10px' }} key={item}></div>;
        }

        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
            <IconButton href={this.props.leftLink } disabled={!this.props.leftLink}>
                <NavigationChevronLeft color={this.context.muiTheme.palette.accent1Color} />
            </IconButton>

            {this.props.items.map(circles.bind(this)) }

            <IconButton href={this.props.rightLink } disabled={!this.props.rightLink}>
                <NavigationChevronRight color={this.context.muiTheme.palette.accent1Color} />
            </IconButton>
        </div>
    },
});

export default PuzzlePaging;