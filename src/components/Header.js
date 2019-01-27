import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBars, faBook, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <a href='/' className='icon-bars'>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a href='/' className='icon-login'>
            <FontAwesomeIcon icon={faUserCircle} />
          </a>
        </nav>
        <h1 className='hdg hdg-1 hdg-main'>Little Free Library</h1>
        <div className='menu'>
          <span><a href='/'><FontAwesomeIcon icon={faBook} />Search for book</a></span>
          <hr/>
          <span><a href='/'><FontAwesomeIcon icon={faMapMarkerAlt} />Find a little free library</a></span>
        </div>
      </header>
    );
  }
}

export default Header;