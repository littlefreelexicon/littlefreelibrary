import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import CardHolder from './components/CardHolder'
import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <HomePage />
        <CardHolder />
      </div>
    );
  }
}

export default App;
