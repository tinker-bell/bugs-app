import React from 'react';
import './App.css';
import TilesBoardModel from './models/TilesBoardModel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header'

const muiTheme = getMuiTheme({

});



var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    // getInitialState() {
    //     // var tilesBoard = new TilesBoardModel();
    //     // tilesBoard.init(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E']);

    //     // var board1 = new TilesBoardModel();
    //     // board1.init(['A', 'B']);
    //     // var board2 = new TilesBoardModel();
    //     // board2.init(['A', 'C']);
    //     // var board3 = new TilesBoardModel();
    //     // board3.init(['D', 'E']);
    //     // return {
    //     //     tiles: tilesBoard.getTiles(),
    //     //     tilesBoard: tilesBoard,
    //     //     board1: board1,
    //     //     board2: board2,
    //     //     board3: board3,
    //     // };
    // },

    render() {
        var currentRouteName = this.context.router;
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

                    // <div style={{ width: 200, height: 200 }}>
                    //     <TilesBoard tilesBoard={this.state.tilesBoard} isThumbnail={false}/>
                    // </div>
                    // <div>Простой уровень</div>
                    // <div className="gameCardsContainer">
                    //     <GameCard key="1" tilesBoard={this.state.board1} title="#1" isThumbnail={true}/>
                    //     <GameCard key="2" tilesBoard={this.state.board2} isThumbnail={true}/>
                    //     <GameCard key="3" tilesBoard={this.state.board3} isThumbnail={true}/>
                    // </div>

















