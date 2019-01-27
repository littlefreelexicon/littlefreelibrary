import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import './styles/App.scss'

class App extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
  this.getBooksFromDb();
}

getBooksFromDb = () => {
  fetch("http://localhost:3000/api/getAllBooks")
    .then(data => data.json())
    .then(res => this.setState({ data: res.data }));
};

  render() {
    return (
      <div className='app'>
        <HomePage />
      </div>
    );
  }
}

export default App;
