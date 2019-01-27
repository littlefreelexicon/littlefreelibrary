import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class BookDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: {}
    }
  }

  componentDidMount() {
    let currentLocation = window.location.href
    let locationArray = currentLocation.split('/')
    let id = locationArray[locationArray.length - 1]

    let dataUrl = `http://localhost:3001/bookDetail/${id}`
 
    fetch(dataUrl)
      .then(data => {
        data.json()
      })
      .then(res => {
        this.setState({ book: res })
        console.log(this.state);
      })
      .catch(
        console.error('lol no')
      )
  }

  render() {
    return (
      <div className='book-detail-page'>
        {/* <img className='book-detail-main-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className='book-title'>
        <h2>{this.state.book.title}</h2>
        <h4>By: {this.state.book.author}</h4>
        </span>
        <h2 className='description'>Location</h2>
        <div className='address-border'>
        <img className='book-detail-library-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className='library-address'>
        <a href='/' className='icon-map-marker'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
        </a><br />
        <a href='/'>{this.state.book.library.location.address}</a>
        </span>
        </div>
        <span><button className='get-directions'>Get Directions</button></span>
        <span><button className='check-out'>Check out this book</button></span>
        <h2 className='description'>Description</h2>
        <p className='description'>{this.state.book.description}</p> */}
        <p>{this.state.book.title}</p>
      </div>
    );
  }
}

export default BookDetail