import React from 'react';


var TileImage = React.createClass({

    render(){
        return <img className={ this.getStyles(this.props.position)}
                    alt="" onDragStart={this.onDragStart}
                    src={ require('./../img/' + this.getSource(this.props.label))}/>;
    },

    getSource(label){
        switch (label){
            case "A":
                return 'bee.svg';
            case "B":
                return 'butterfly.svg';
            case "C":
                return 'ladybug.svg';
            case "D":
                return 'dragonfly.svg';
            case "E":
                return 'butterfly-1.svg';
            case "F":
                return 'flower.svg';
            default:
                return 'tree-1.svg';
        }
    },

    getStyles(position){
        switch (position){
            case "top":
                return "topImage";
            case "bottom":
                return 'bottomImage';
            case "left":
                return 'leftImage';
            default:
                return 'rightImage';
        }
    },

    onDragStart(ev){
        //ev.preventDefault();
    },
});

export default TileImage;
