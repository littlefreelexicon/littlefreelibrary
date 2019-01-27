import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import BookCard from './BookCard'

class LibraryDetail extends Component {

  constructor (props) {
    super(props)
    this.state = {
        library: {
            streetAddress: '2635 Girard Ave South',
            cityState: 'Minneapolis, MN',
            steward: 'Christiana Routon'
        },
        books: [{"genres":["sci-fi","fantasy"],"_id":"5c4cd9d8e62717338890efed","title":"The Adventures of Tom Sawyer","author":"Mark Twain","dateAdded":"2019-01-26T22:06:16.523Z","library":"5c4cecb01f63142df803ade0","__v":0},{"genres":["children","fantasy"],"_id":"5c4cf7425689c33dd07995b3","title":"Artemis Fowl","author":"Eoin Colfer","isbn":"9780307343093","isAvailable":true,"library":"5c4cece31f63142df803ade1","dateAdded":"2019-01-27T00:11:46.719Z","__v":0},{"genres":["non-fiction"],"_id":"5c4d0ca91207a44528121618","title":"Ana is Amazing","author":"Ana Knickerbocker","isbn":"6129161658","isAvailable":true,"library":"5c4cece31f63142df803ade1","dateAdded":"2019-01-27T01:43:05.628Z","__v":0},{"genres":["Economics"],"_id":"5c4d10d01c9d440000fbbc6a","title":"Rock, Paper, Scissors: Game Theory in Everyday Life","author":"Len Fisher","dateAdded":"2019-01-22T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0},{"genres":["Religion"],"_id":"5c4d132f1c9d440000fbbc6c","title":"Spirituality of the Cross","author":"Gene Edward Veith","dateAdded":"2019-01-24T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0},{"genres":["Science","Children's"],"_id":"5c4d16491c9d440000fbbc6d","title":"The Five Senses","author":"John Doe","dateAdded":"2019-01-23T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0},{"genres":["Fiction - Historical"],"_id":"5c4d176a1c9d440000fbbc6e","title":"A Tale of Two Cities","author":"Charles Dickens","isbn":"9780307343093","isAvailable":true,"library":"5c4cece31f63142df803ade1","dateAdded":"2019-01-27T00:11:46.719Z","__v":0},{"genres":["Children's"],"_id":"5c4d17bc1c9d440000fbbc6f","title":"Mason's Birthday Party","author":"John Doe","dateAdded":"2019-01-23T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0},{"genres":["Fiction"],"_id":"5c4d18551c9d440000fbbc70","title":"To Kill a Mockingbird","author":"Harper Lee","dateAdded":"2019-01-22T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0},{"genres":["Fantasy","Children's"],"_id":"5c4d18db1c9d440000fbbc71","title":"The Lightning Thief","author":"Rick Riordan","dateAdded":"2019-01-24T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0},{"genres":["Religion","Medicine"],"_id":"5c4d1a6e1c9d4400000c3d2f","title":"The Spirit Catches You and You Fall Down: A Hmong Child, Her American Doctors, and the Collision of Two Cultures","author":"Anne Fadiman","dateAdded":"2019-01-25T22:06:16.523Z","library":"5c4cecb01f63142df803ade0","__v":0},{"genres":["Children's","Fantasy"],"_id":"5c4d1bac1c9d4400000c3d31","title":"The Lion, the Witch, and the Wardrobe","author":"C. S. Lewis","dateAdded":"2019-01-25T22:06:16.523Z","library":"5c4cecb01f63142df803ade0","__v":0},{"genres":["Fiction - Historical"],"_id":"5c4d1c831c9d4400000c3d32","title":"A Christmas Carol","author":"Charles Dickens","isbn":"9780307343093","isAvailable":true,"library":"5c4cece31f63142df803ade1","dateAdded":"2019-01-27T00:11:46.719Z","__v":0},{"genres":["Fiction - Historical","Children's"],"_id":"5c4d1cba1c9d4400000c3d33","title":"Oliver Twist","author":"Charles Dickens","dateAdded":"2019-01-24T22:06:16.523Z","library":"5c4d11401c9d440000fbbc6b","__v":0}]
    }
  }


  goToGoogle(){
    window.open('https://www.google.com/maps/dir/Glen+Nelson+Center,+Wabasha+Street+North+%23500,+Saint+Paul,+MN/44.9454441,-93.1372606/@44.9381581,-93.1707392,13z/data=!4m8!4m7!1m5!1m1!1s0x87f7d5e4f681971b:0x9a085adfbe7ccf95!2m2!1d-93.0941778!2d44.9461828!1m0', '_blank')
  }

  render() {
    return (
      <div className='book-detail-page'>
        <img className='book-detail-main-image' alt='' src='https://mymodernmet.com/wp/wp-content/uploads/archive/NKELseWBX97O7un3EPiz_1082118316.jpeg'/>
        <span className="align-address">
        <h2 className="description">Address</h2>
        <a href='/'>{this.state.library.streetAddress}<br />
        {this.state.library.cityState}</a>
        </span>
        <span className="align-steward">
        <h2 className="description">Steward</h2>
        <span>
        {this.state.library.steward}
        </span>
        </span>
        <span><button className='get-directions' onClick={this.goToGoogle}>Get Directions</button></span>
        <h2>Available Books</h2>
        {this.state.books.map((book) => {
          return (
            <BookCard title={book.title} author={book.author} libraryName={book.library} />
          )
        })}
      </div>
    );
  }
}

export default LibraryDetail
