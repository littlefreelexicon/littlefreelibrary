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

  goToGoogle(){
    window.open('https://www.google.com/maps/dir/Glen+Nelson+Center,+Wabasha+Street+North+%23500,+Saint+Paul,+MN/44.9454441,-93.1372606/@44.9381581,-93.1707392,13z/data=!4m8!4m7!1m5!1m1!1s0x87f7d5e4f681971b:0x9a085adfbe7ccf95!2m2!1d-93.0941778!2d44.9461828!1m0', '_blank')
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
        <span><button onClick={this.goToGoogle} className='get-directions'>Get Directions</button></span>
        <span><button className='check-out'>Check out this book</button></span>
        <h2 className='description'>Description</h2>
        <p className='description'>{this.state.book.description}</p>
      </div>
    );
  }
}

export default BookDetail