import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class BookDetail extends Component {

  constructor (props) {
    super(props)
    this.state = {
        book: {
            title: '',
            image: 'https://www.w3schools.com/images/picture.jpg'
        }
    }
  }
  render() {
    return (
      <div className='book-detail-page'>
        <img className='book-detail-main-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className="book-title">
        <h2>Huck Fin</h2>
        <h4>By: Mark Twain</h4>
        </span>
        <h2 className="description">Location</h2>
        <div className='address-border'>
        <img className='book-detail-library-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className='library-address'>
        <a href='/' className='icon-map-marker'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
        </a><br />
        <a href='/'>2635 Girard Ave South<br />
        Minneapolis, MN</a>
        </span>
        </div>
        <span><button className='get-directions'>Get Directions</button></span>
        <span><button className='check-out'>Check out this book</button></span>
        <h2 className='description'>Description</h2>
        <p className='description'>Some description here.</p>
      </div>
    );
  }
}

export default BookDetail