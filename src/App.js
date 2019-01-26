import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import BookCard from './components/BookCard'
import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
      </div>
    );
  }
}

export default App;
