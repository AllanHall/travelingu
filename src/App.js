import React, { Component } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Accounts from './pages/Accounts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/register/:id" exact component={Accounts} />
        </Switch>
      </Router>
    )
  }
}

export default App
