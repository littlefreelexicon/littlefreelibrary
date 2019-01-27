import React, { Component } from 'react'
import BookCard from './BookCard'

class CardHolder extends Component {
  render() {
    return (
      <div className='card_holder'>
        {/* TODO: Cards are spawned here depending on JSON return */}
        {/* <div className='card'>
          <p>I'm a berk</p>
        </div> */}
        <BookCard title='Harry Potter' author='J.K. Rowling' libraryName='Cute Library' />
      </div>
    );
  }
}

export default CardHolder;