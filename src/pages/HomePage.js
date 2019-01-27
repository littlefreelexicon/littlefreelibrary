import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import CardHolder from '../components/CardHolder'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
      </React.Fragment>
    )
  }
}

export default HomePage
