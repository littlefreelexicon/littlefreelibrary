import React, { Component } from 'react'
import Header from '../components/Header'
import BookDetail from '../components/BookDetail'
import Search from '../components/Search'
import CardHolder from '../components/CardHolder'
import LibraryDetail from '../components/LibraryDetail'

class HomePage extends Component {

filterTheResultsByTitle(searchTerm) {
  this.state.books.filter(book => {
    return book.title == searchTerm
  })
}

filterTheResultsByAuthor(searchTerm) {
  this.state.books.filter(book => {
    return book.author == searchTerm
  })
}

runSearch(searchTerm) {
  this.setState(books: [])
  let title = filterTheResultsByTitle(searchTerm)
  this.state.books.push(title)
  let author = filterTheResultsByAuthor(searchTerm)
  this.state.books.push(author)
}
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
        <LibraryDetail />
      </React.Fragment>
    );
  }
}

export default HomePage;
