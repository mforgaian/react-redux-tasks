import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import ConsoleCurrentState from './container/consoleCurrentState'
import FormTask from './container/FormTask';
import D3Task from './container/d3task'

let App = () => (
  <Router>
    <div >
    <nav className="App-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/task1">Task 1</Link></li>
            <li><Link to="/task2">Task 2</Link></li>
            <li><Link to="/debug">Console Current State</Link></li>
          </ul>
    </nav>
    {/* <D3Task> </D3Task> */}
    <Route exact path="/debug" component={ConsoleCurrentState} />
    <Route exact path="/task1" component={FormTask} />
    <Route exact path="/task2" component={D3Task} />
  </div>
  </Router>
)

export default App;