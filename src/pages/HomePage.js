import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
      </React.Fragment>
    );
  }
}

export default HomePage;