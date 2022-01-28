import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/index'
import Chat from './pages/chat'
import Pagina404 from './pages/404'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
        <Route>
          <Pagina404/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App