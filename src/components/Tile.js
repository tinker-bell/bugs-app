import React from 'react';
import TileImage from './TileImage'
import {Iter} from '../Utils'


var Tile = React.createClass({

    getInitialState() {
        return {
            isDragging: false,
            isDragOver: false
        };
    },

    render() {

        var labels = function* (props) {
            if (!props.isEmpty) {
                if (props.topLabel) {
                    yield <TileImage key="top" position="top" label={props.topLabel}/>;
                }
                if (props.bottomLabel) {
                    yield <TileImage key="bottom" position="bottom" label={props.bottomLabel}/>;
                }
                if (props.leftLabel) {
                    yield <TileImage key="left" position="left" label={props.leftLabel}/>;
                }
                if (props.rightLabel) {
                    yield <TileImage key="right" position="right" label={props.rightLabel}/>;
                }
            }
        };

        var class_name = "tile";
        if (this.props.isEmpty) {
            class_name = " emptyTile";
        }
        else if (this.state.isDragging) {
            class_name += " draggingTile";
        }
        else if (this.props.isDraggable) {
            class_name += " draggable";
        }
        if (this.isDragOver) {
            class_name += " dragOver";
        }

        var isPreview = this.props.isPreview;

        return <div className="square">
            <div className={class_name}
                draggable={this.props.isDraggable}
                onDragStart={(isPreview) ? null : this.onDragStart}
                onDragEnd={isPreview ? null : this.onDragEnd}
                onDragEnter={isPreview ? null : this.onDragEnter}
                onDragLeave={isPreview ? null : this.onDragLeave}
                onDragOver={isPreview ? null : this.onDragOver}
                onDrop={isPreview ? null : this.onDrop}
                onClick={isPreview ? null : this.onClick}>
                {Iter.toArray(labels(this.props))}
            </div>
        </div>;
    },



    onClick(ev) {
        if (this.props.isDraggable) {
            this.props.swapTiles(this.props.position.row, this.props.position.column);
        }
    },

    onDragLeave(ev) {
    },

    onDrop(ev) {
        if (this.props.isEmpty) {
            var data = ev.dataTransfer.getData("text");
            var position = JSON.parse(data);
            this.props.swapTiles(position.row, position.column);
        }
        ev.preventDefault();
    },

    onDragOver(ev) {
        if (this.props.isEmpty || this.state.isDragging) {
            ev.preventDefault();
        }
        //this.setState({isDragOver: true});
    },

    onDragEnter(ev) {
        if (this.props.isEmpty || this.props.isDraggable) {
            ev.preventDefault();
        }
    },

    onDragStart(ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text", JSON.stringify(this.props.position));

        this.setState({ isDragging: true });
    },

    onDragEnd(ev) {
        ev.dataTransfer.clearData();
        this.setState({
            isDragging: false,
            isDragOver: false
        });
    }
});

export default Tile
