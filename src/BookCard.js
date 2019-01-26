import React, { Component } from 'react'

class BookCard extends Component {
  render() {
    return (
      <div className="bookCard">
        <img href='https%3A%2F%2Fwww.willacather.org%2Fsites%2Fdefault%2Ffiles%2Fimages%2F1%2Fbookstack.jpg&imgrefurl=https%3A%2F%2Fwww.willacather.org%2Fwilla-cather-book-club&docid=izWeVGxFwhq6PM&tbnid=7x566j085Q5MxM%3A&vet=10ahUKEwjQneL0q4zgAhVH6oMKHW3aDx0QMwh9KBAwEA..i&w=1050&h=1050&client=firefox-b-1&bih=737&biw=1399&q=book%20image&ved=0ahUKEwjQneL0q4zgAhVH6oMKHW3aDx0QMwh9KBAwEA&iact=mrc&uact=8' />
        <div> A Tale of Two Cities </div>
        <div> by Charles Dickens </div>
        <div> At 396 Roy Street </div>
      </div>
    );
  }
}

export default BookCard;
