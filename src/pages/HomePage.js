import React, { Component } from 'react'
import Header from '../components/Header'
import BookDetail from '../components/BookDetail'
import Search from '../components/Search'
import CardHolder from '../components/CardHolder'

class HomePage extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
        <BookDetail />
      </React.Fragment>
    );
  }
}

export default HomePage;
