import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import BookCard from '../components/BookCard'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <BookCard />
      </React.Fragment>
    );
  }
}

export default HomePage;
