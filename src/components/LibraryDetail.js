import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import BookCard from './BookCard'

class LibraryDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      library: {}
    }
  }

  componentDidMount() {
    let location = window.location.href
    let locationArray = location.split('/')
    let id = locationArray[locationArray.length - 1]

    fetch(`http://localhost:3001/findLibrary/${id}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ library: res })
      })
  }

  render() {
    return (
      <div className='book-detail-page'>
        <img className='book-detail-main-image' alt='' src='https://mymodernmet.com/wp/wp-content/uploads/archive/NKELseWBX97O7un3EPiz_1082118316.jpeg'/>
        <span className='align-address'>
        <h2 className='description'>Address</h2>
        <a href='/'>{this.state.library.location && this.state.library.location.address}</a>
        </span>
        <span className='align-steward'>
        <h2 className='description'>Steward</h2>
        <span>
        {`${this.state.library.steward && this.state.library.steward.firstName} ${this.state.library.steward && this.state.library.steward.lastName}`}
        </span>
        </span>
        <span><button className='get-directions'>Get Directions</button></span>
        <h2>Available Books</h2>
        {this.state.library.books && this.state.library.books.map((book) => {
          return (
            <BookCard
              title={book.title.length > 40 ? book.title.substring(0,40) + '...' : book.title}
              author={book.author}
              genre={book.genres[0]}
              id={book._id} />
          )
        })}
      </div>
    );
  }
}

export default LibraryDetail
