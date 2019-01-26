import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import BookCard from './BookCard'
import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
        <BookCard />
      </div>
    );
  }
}

export default App;
