import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
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
    console.log(id)

    fetch(`http://localhost:3001/findLibrary/${id}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ library: res })
      })
  }

  goToGoogle() {
    window.open(
      'https://www.google.com/maps/dir/Glen+Nelson+Center,+Wabasha+Street+North+%23500,+Saint+Paul,+MN/The+Buttered+Tin,+7th+Street+East,+Saint+Paul,+MN/@44.9485887,-93.0949047,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x87f7d5e4f681971b:0x9a085adfbe7ccf95!2m2!1d-93.0941778!2d44.9461828!1m5!1m1!1s0x87f7d5506765dcf3:0xe663f9063ed3d018!2m2!1d-93.0888711!2d44.9510235',
      '_blank'
    )
  }

  render() {
    return (
      <div className='book-detail-page'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <img className='book-detail-main-image' alt='' src={this.state.library && this.state.library.photo}/>
        <span className='align-address'>
        <h2 className='description'>Address</h2>
        <a href='/'>{this.state.library.location && this.state.library.location.address.replace(",", "")}</a>
        </span>
        <span className='align-steward'>
        <h2 className='description'>Steward</h2>
        <span>
        {`${this.state.library.steward && this.state.library.steward.firstName} ${this.state.library.steward && this.state.library.steward.lastName}`}
        </span>
        </span>
        <span><button className='get-directions' onClick={this.goToGoogle}>Get Directions</button></span>
        <h2>Available Books</h2>
        <div className='card_holder'>
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
      </div>
    );
  }
}

export default LibraryDetail
