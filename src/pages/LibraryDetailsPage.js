import React, { Component } from 'react'
import Header from '../components/Header'
import LibraryDetail from '../components/LibraryDetail'

class LibraryDetailsPage extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <React.Fragment>
        <LibraryDetail />
      </React.Fragment>
    )
  }
}

export default LibraryDetailsPage
