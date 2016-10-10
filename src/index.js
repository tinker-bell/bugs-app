import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import PuzzlesList from './components/PuzzlesList'
import PlayGame from './components/PlayGame';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlayGame} />) } />
      <Route path='/:level' component={ PuzzlesList } />
      <Route path='/:level/:puzzleNumber' component={PlayGame}  />
      <Route path='/:level/:puzzleNumber/:action' component={PlayGame}  />
    </Route>
  </Router>,
  document.getElementById('root')
);
