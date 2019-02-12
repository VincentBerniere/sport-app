import React, { Component } from 'react';
import './App.scss';

import Header from './Header/Header.js';
import Content from './Content/Content.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

      <div className="ui main container">
        <h1 className="ui header">Login</h1>
        
        <Content />
      </div>
    </div>
    );
  }
}

export default App;
