import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class BookDetail extends Component {

  constructor (props) {
    super(props)
    this.state = {
        library: {
            streetAddress: '2635 Girard Ave South',
            cityState: 'Minneapolis, MN'
        },
        book: {
            title: 'Huckleberry Finn',
            author: 'Mark Twain',
            image: 'https://www.w3schools.com/images/picture.jpg',
            description: 'Huck finn description'
        }
    }
  }

  render() {
    return (
      <div className='book-detail-page'>
        <img className='book-detail-main-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className="book-title">
        <h2>{this.state.book.title}</h2>
        <h4>By: {this.state.book.author}</h4>
        </span>
        <h2 className="description">Location</h2>
        <div className='address-border'>
        <img className='book-detail-library-image' alt='' src='https://www.w3schools.com/images/picture.jpg'/>
        <span className='library-address'>
        <a href='/' className='icon-map-marker'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
        </a><br />
        <a href='/'>{this.state.library.streetAddress}<br />
        {this.state.library.cityState}</a>
        </span>
        </div>
        <span><button className='get-directions'>Get Directions</button></span>
        <span><button className='check-out'>Check out this book</button></span>
        <h2 className='description'>Description</h2>
        <p className='description'>{this.state.book.description}</p>
      </div>
    );
  }
}

export default BookDetail