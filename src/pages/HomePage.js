import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import BookCard from '../components/BookCard'
import CardHolder from '../components/CardHolder'

class HomePage extends Component {
  state = {
    books: [],
  }

componentDidMount() {
  this.getBooksFromDb();
}

getBooksFromDb = () => {
  fetch("http://localhost:3001/books/getAllBooks")
    .then(data => data.json())
    .then(res => this.setState({ books: res.data }));
};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
      </React.Fragment>
    );
  }
}

export default HomePage;
