import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import ConsoleCurrentState from './container/consoleCurrentState'
import FormTask from './container/FormTask';

let App = () => (
  <Router>
    <div >
    <nav className="App-nav">
          <ul>
            <li><Link to="/task1">Task 1</Link></li>
            <li><Link to="/debug">Console Current State</Link></li>
          </ul>
    </nav>
    <Route exact path="/debug" component={ConsoleCurrentState} />
    <Route exact path="/task1" component={FormTask} />
  </div>
  </Router>
)

export default App;