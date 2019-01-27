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
  fetch("http://localhost:3001/allBooks")
  .then(data => data.json())
  .then(res => {
    console.log(res)
    this.setState({ books: res })
  })
  console.log(this.state.books)
  }

  render() {
    return (
      <div className='card_holder'>
        {/* TODO: Cards are spawned here depending on JSON return */}
        {/* <div className='card'>
          <p>I'm a berk</p>
        </div> */}
        {this.state.books.map((book) => {
          return (
            <BookCard title={book.title.length > 40 ? book.title.substring(0,40) + "..." : book.title} author={book.author} libraryName={book.library.libraryName} genre={book.genres[0]}/>
          )
        })}
      </div>
    );
  }
}

export default CardHolder;