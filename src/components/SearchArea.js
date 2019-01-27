import React, { Component } from 'react'

class SearchArea extends Component {
  render() {
    return (
      // Pops up from the bottom
      <form className='search-area-page'>
        <h4 className='search-area'>Search area</h4>
        <span className='select-area'>
        <span>within</span>
        <select>
        <option selected value="2">2 miles</option>
        <option value="5">5 miles</option>
        <option value="10">10 miles</option>
        <option value="20">20 miles</option>
        </select>
        <span>of</span>
        <select>
        <option selected value="55101">55101</option>
        <option value="55107">55107</option>
        <option value="55146">55146</option>
        <option value="20">55103</option>
        </select>
        </span><br />
        <button className='done-button'>Done</button>
      </form>
    );
  }
}

export default SearchArea;