import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class BookDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {}
    }
  }

  componentDidMount() {
    let location = window.location.href
    let locationArray = location.split('/')
    let id = locationArray[locationArray.length - 1]

    fetch(`http://localhost:3001/bookDetail/${id}`)
      .then(data => data.json())
      .then(res => {
        console.log(res)
        this.setState({ book: res })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className='book-detail-page'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <img
          className='book-detail-main-image'
          src={this.state.book.genres ? (process.env.PUBLIC_URL + '/images/' + this.state.book.genres[0] + '.svg') : (process.env.PUBLIC_URL + '/images/fiction.svg')}
          alt="book genre icon" />
        <span className="book-title">
          <h2>{this.state.book.title}</h2>
          <h4>By {this.state.book.author}</h4>
        </span>
        <h3 className="description">Find it here:</h3>
        <div className='address-border'>
          <img
            className='book-detail-library-image'
            alt=''
            src={this.state.book.library && this.state.book.library.photo}/>
          <div className='library-address'>
            <a href='/'><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.book.library && this.state.book.library.location.address}</a>
          </div>
        </div>
        <span><button className='get-directions'>Get Directions</button></span>
        <span><button className='check-out'>Check out this book</button></span>
      </div>
    );
  }
}

export default BookDetail