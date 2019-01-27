import React, { Component } from 'react'
import BookCard from './BookCard'

class CardHolder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  render() {
    return (
      <div className="card_holder">
        {this.props.resultsFromHome.map(book => {
          return (
            <BookCard
              title={
                book.title.length > 40
                  ? book.title.substring(0, 40) + '...'
                  : book.title
              }
              author={book.author}
              libraryName={book.library.libraryName}
              id={book._id}
            />
          )
        })}
      </div>
    )
  }
}

export default CardHolder
