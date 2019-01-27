import React, { Component } from 'react'
import Header from '../components/Header'
import BookDetail from '../components/BookDetail'
import Search from '../components/Search'
import CardHolder from '../components/CardHolder'
import LibraryDetail from '../components/LibraryDetail'

class HomePage extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
      </React.Fragment>
    );
  }
}

export default HomePage;
