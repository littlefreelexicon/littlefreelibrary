import React, { Component } from 'react'
import Header from '../components/Header'
import BookDetail from '../components/BookDetail'

class BookDetailsPage extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <React.Fragment>
        <BookDetail />
      </React.Fragment>
    )
  }
}

export default BookDetailsPage
