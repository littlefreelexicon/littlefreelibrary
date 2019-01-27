import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class BookCard extends Component {
  render() {
    return (
      <div className='card'>
        <img src='https://www.fillmurray.com/200/250' alt="It's Bill Murray" />
        <h2>{this.props.title} <span>by {this.props.author}</span></h2>
        <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> <address>{this.props.libraryName}</address></h3>
      </div>
    );
  }
}

export default BookCard;
