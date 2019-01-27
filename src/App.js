import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'
import './styles/App.scss'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/bookdetails" component={BookDetailsPage} />
    </Switch>
  </Router>
)

export default App
