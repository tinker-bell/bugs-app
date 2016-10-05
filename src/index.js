import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import PuzzlesList from './components/PuzzlesList'
import PlayGame from './components/PlayGame';
import Puzzle from './models/Puzzle'

injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PuzzlesList} />) } />
      <Route path='/:level' component={ PuzzlesList } />
      <Route path='/:level/:puzzleNumber' component={PlayGame}  />
      <Route path='/:level/:puzzleNumber/:action' component={PlayGame}  />
    </Route>
  </Router>,
  document.getElementById('root')
);

      // <Route path={Puzzle.level.master} component={() => (<PuzzlesList level={Puzzle.level.master} />) } />
      // <Route path={Puzzle.level.expert} component={() => (<PuzzlesList level={Puzzle.level.expert} />) } />

      // <Route path={'/:level/:id/'} component={PlayGame}  />
      // <Route path={"/:level/:id/:action"}  component={PlayGame} />

      // <Route path={Puzzle.level.expert + "/:id"}
      //   component={() => <PlayGame level={Puzzle.level.expert} action={Games.action.continue}/>} />
      // <Route path={Puzzle.level.expert + "/:id/:action"}
      //   component={() => <PlayGame level={Puzzle.level.expert} />} />


      // <Route path={Puzzle.level.master + "/:id"}
      //   component={() => <PlayGame level={Puzzle.level.master} action={Games.action.continue}/>}  />
      // <Route path={Puzzle.level.master + "/:id/:action"} component={() => <PlayGame level={Puzzle.level.master} /> } />

      // <Route path="expert/" component={ExpertPuzzles} />
      // <Route path="expert/:id" component={PlayGame} />

// <Route path="about" component={About}/>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>