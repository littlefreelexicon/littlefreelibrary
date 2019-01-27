import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import SearchArea from '../components/SearchArea'
import CardHolder from '../components/CardHolder'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/allBooks')
      .then(data => data.json())
      .then(res => {
        this.setState({ books: res })
      })
  }

  filteredResults = dataFromSearch => {
    this.setState({ books: dataFromSearch })
    console.log(this.state.books)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
        <SearchArea />
      </React.Fragment>
    )
  }
}

export default HomePage
