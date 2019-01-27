import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class BookDetail extends Component {
  constructor(props) {
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

  goToGoogle() {
    window.open(
      'https://www.google.com/maps/dir/Glen+Nelson+Center,+Wabasha+Street+North+%23500,+Saint+Paul,+MN/The+Buttered+Tin,+7th+Street+East,+Saint+Paul,+MN/@44.9485887,-93.0949047,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x87f7d5e4f681971b:0x9a085adfbe7ccf95!2m2!1d-93.0941778!2d44.9461828!1m5!1m1!1s0x87f7d5506765dcf3:0xe663f9063ed3d018!2m2!1d-93.0888711!2d44.9510235',
      '_blank'
    )
  }

  render() {
    console.log(this.state)
    return (
      <div className="book-detail-page">
        <FontAwesomeIcon icon={faArrowLeft} />
        <img
          className="book-detail-main-image"
          src={
            this.state.book.genres
              ? process.env.PUBLIC_URL +
                '/images/' +
                this.state.book.genres[0] +
                '.svg'
              : process.env.PUBLIC_URL + '/images/fiction.svg'
          }
          alt="book genre icon"
        />
        <span className="book-title">
          <h2>{this.state.book.title}</h2>
          <h4>By {this.state.book.author}</h4>
        </span>
        <h3 className="description">Find it here:</h3>
        <div className="address-border">
          <img
            className="book-detail-library-image"
            alt=""
            src={this.state.book.library && this.state.book.library.photo}
          />
          <div className="library-address">
            <a
              href={
                this.state.book.library &&
                `http://localhost:3000/librarydetails/${
                  this.state.book.library._id
                }`
              }
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {this.state.book.library &&
                this.state.book.library.location.address}
            </a>
          </div>
          <span>
            <button className="get-directions" onClick={this.goToGoogle}>
              Get Directions
            </button>
          </span>
          <span>
            <button className="check-out">Check out this book</button>
          </span>
        </div>
      </div>
    )
  }
}

export default BookDetail
