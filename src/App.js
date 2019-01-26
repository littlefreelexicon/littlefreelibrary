import React, { Component } from 'react'
import BookCard from './BookCard'
import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='hdg hdg-1 hdg-main'>Look, a header!</h1>
        <p>Wow, it's so beautiful</p>
        <BookCard />
      </div>
    );
  }
}

export default App;
