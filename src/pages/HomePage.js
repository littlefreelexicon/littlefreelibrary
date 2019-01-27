import React, { Component } from 'react'
import Header from '../components/Header'
import BookDetail from '../components/BookDetail'
import Search from '../components/Search'
import BookCard from '../components/BookCard'
import CardHolder from '../components/CardHolder'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
        <BookCard />
        <BookDetail />
      </React.Fragment>
    );
  }
}

export default HomePage;
