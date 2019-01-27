import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

class BookDetail extends Component {
  render() {
    return (
      <div className='book-detail-page'>
        <img className='book-detail-main-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <h2 className="description">Location</h2>
        <div className='address-border'>
        <img className='book-detail-library-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className='library-address'>
        <a href='/' className='icon-map-marker'>
            <FontAwesomeIcon icon={faMapMarker} />
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