import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class BookCard extends Component {
  render() {
    return (
      <a href={`http://localhost:3000/bookdetails/${this.props.id}`}>
        <div className='card'>
          <img src={process.env.PUBLIC_URL + '/images/' + this.props.genre + '.svg'} alt="book genre icon" />
          <h2>{this.props.title} <span>by {this.props.author}</span></h2>
          <h3>{this.props.libraryName && (<FontAwesomeIcon icon={faMapMarkerAlt} /> )} <address>{this.props.libraryName}</address></h3>
        </div>
      </a>
    );
  }
}

export default BookCard;
