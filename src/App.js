import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book/Book'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Book/>
      </div>
    );
  }
}

export default App;
