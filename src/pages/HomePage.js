import React, { Component } from 'react'
import Header from '../components/Header'
import BookDetail from '../components/BookDetail'
import Search from '../components/Search'
import BookCard from '../components/BookCard'
import CardHolder from '../components/CardHolder'

class HomePage extends Component {
  state = {
    books: [],
  }

componentDidMount() {
  this.getBooksFromDb();
  console.log(this.props.books)
}

getBooksFromDb = () => {
  fetch("http://localhost:3001/allBooks/")
    .then(data => data.json())
    .then(res => this.setState({ books: res.data }));
};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <CardHolder />
        <BookCard />
        <BookDetail />
      </React.Fragment>
    );
  }
}

export default HomePage;
