import React, { Component } from 'react';
import AppHeader from './Components/Header';
import Book from './Components/Book';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Book />
      </div>
    );
  }
}

export default App;
