import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <form className='search'>
        <span>Books close by</span>
        <button>near 55102</button> {/* TODO: opens SearchArea modal at bottom of screen on click */}
        <input type='text' placeholder='search a book title, author or publisher'>
        </input>
      </form>
    );
  }
}

export default Search;