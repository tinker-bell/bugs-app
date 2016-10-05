import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router'
import Puzzle from './../models/Puzzle'

const muiTheme = getMuiTheme();

var Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    render() {
        var getActiveTab = function (pathname) {
            var matches = /^\/(\w+)[\/\?]*/.exec(pathname);
            return (matches && matches.length >= 2) ? matches[1] : Puzzle.level.beginner;
        };
        
        return (
            <div>
                <AppBar zDepth={0} title="Букашки" showMenuIconButton={false} style={{ justifyContent: 'flex-end' }}>
                </AppBar>
                <div style={{ backgroundColor: muiTheme.palette.primary1Color, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center' }}>
                    <Tabs style={{ flex: 'right', width: '320px' }} value={getActiveTab(this.props.pathname) }>
                        <Tab label={'Новичкам'} value={Puzzle.level.beginner} onActive={this.onBeginnerActive}></Tab>
                        <Tab label={'Опытным'} value={Puzzle.level.master} onActive={this.onMasterActive}></Tab>
                        <Tab label={'Экспертам'} value={Puzzle.level.expert} onActive={this.onExpertActive}></Tab>
                    </Tabs>                 
                </div>
            </div>
        );
    },

       

    onBeginnerActive() {
        this.context.router.push('/' + Puzzle.level.beginner)
    },

    onMasterActive() {
        this.context.router.push('/' + Puzzle.level.master)
    },

    onExpertActive() {
        this.context.router.push('/' + Puzzle.level.expert)
    },

});

export default Header;
















