import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import Puzzle from './../models/Puzzle'
import GitHubSvgIcon from './GitHubSvgIcon'


const Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        muiTheme: React.PropTypes.object.isRequired,
    },

    render() {
        var getActiveTab = function (pathname) {
            var matches = /^\/(\w+)[\/\?]*/.exec(pathname);
            return (matches && matches.length >= 2) ? matches[1] : Puzzle.level.beginner;
        };

        const gitHubLink = 'https://github.com/tinker-bell/bugs-app';
        var tabsContainerStyle = Header.styles.tabsContainer;
        tabsContainerStyle.backgroundColor= this.context.muiTheme.palette.primary2Color;

        return (
            <div>
                <AppBar zDepth={0} title="Букашки" 
                    showMenuIconButton={false}
                    iconElementRight={<IconButton href={gitHubLink}><GitHubSvgIcon /></IconButton>}>
                </AppBar>
                <div style={tabsContainerStyle}>
                    <Tabs style={Header.styles.tabs}
                        value={getActiveTab(this.props.pathname) }>
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

Header.styles = {
    tabs: {
        flex: 'right',
        width: '320px',
    },

    tabsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        marginBottom: '15px'
    }
};

export default Header;
















