import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <HomePage />
      </div>
    );
  }
}

export default App;
