import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import './styles/App.scss'

class App extends Component {
  state = {
    book: {}
  }

  componentDidMount() {
  this.getBookFromDb();
}

getBookFromDb = () => {
  fetch("http://localhost:3001/api/getData")
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
