import React, { Component } from 'react'
import Header from '../components/Header'
import BookCard from '../components/BookCard'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BookCard />
      </React.Fragment>
    );
  }
}

export default HomePage;
