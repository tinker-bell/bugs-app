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
        var tile = this.props.tile;

        var labels = function* (tile) {
            if (!tile.isEmpty) {
                if (tile.topLabel) {
                    yield <TileImage key="top" position="top" label={tile.topLabel}/>;
                }
                if (tile.bottomLabel) {
                    yield <TileImage key="bottom" position="bottom" label={tile.bottomLabel}/>;
                }
                if (tile.leftLabel) {
                    yield <TileImage key="left" position="left" label={tile.leftLabel}/>;
                }
                if (tile.rightLabel) {
                    yield <TileImage key="right" position="right" label={tile.rightLabel}/>;
                }
            }
        };

        var class_name = tile.isEmpty ? "emptyTile" : "tile";
        if (this.props.isDraggable){
            class_name += " draggable";
        }        
        if (this.state.isDragging) {
            class_name += " draggingTile";
        }
        if (tile.showMatch) {
            class_name += " matchedTile";
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
                {Iter.toArray(labels(tile)) }
            </div>
        </div >;
    },

    onClick(ev) {
        if (this.props.isDraggable) {
            this.props.swapTiles(this.props.position.row, this.props.position.column);
        }
    },

    onDragLeave(ev) {
    },

    onDrop(ev) {
        if (this.props.tile.isEmpty) {
            var data = ev.dataTransfer.getData("text");
            var position = JSON.parse(data);
            this.props.swapTiles(position.row, position.column);
        }
        ev.preventDefault();
    },

    onDragOver(ev) {
        if (this.props.tile.isEmpty || this.state.isDragging) {
            ev.preventDefault();
        }
    },

    onDragEnter(ev) {
        if (this.props.tile.isEmpty || this.props.isDraggable) {
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
