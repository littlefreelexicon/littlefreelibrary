import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      books: [],
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const elementvalue = document.getElementById('forminput').value
    fetch("http://localhost:3001/allBooks")
    .then(data => data.json())
    .then(res => {
      const filtered = res.filter(book => {
        return book.title.toLowerCase() === elementvalue.toLowerCase()
      })
      this.setState({ books: filtered })
    })
  }
  
  render() {
    return (
      <form className='search' id='searchform' onSubmit={this.handleSubmit}>
        <span>Books close by</span>
        <button type='submit'>near 55102</button> {/* TODO: opens SearchArea modal at bottom of screen on click */}
        <input id='forminput' type='text' placeholder='search a book title, author or publisher'>
        </input>
      </form>
    );
  }
}

export default Search;
