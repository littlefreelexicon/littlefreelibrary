import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'
import LibraryDetailsPage from './pages/LibraryDetailsPage'
import './styles/App.scss'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/bookdetails/:id' component={BookDetailsPage} />
      <Route exact path='/librarydetails/:id' component={LibraryDetailsPage} />
    </Switch>
  </Router>
)

export default App
