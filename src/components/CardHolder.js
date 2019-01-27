import React, { Component } from 'react'
import BookCard from './BookCard'

class CardHolder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/allBooks')
      .then(data => data.json())
      .then(res => {
        this.setState({ books: res })
      })
  }

  render() {
    return (
      <div className='card_holder'>
        {this.state.books.map((book) => {
          return (
            <BookCard
              title={book.title}
              author={book.author}
              libraryName={book.library}
              id={book._id} />
          )
        })}
      </div>
    );
  }
}

export default CardHolder