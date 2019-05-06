import React, { Component } from 'react';
import Header from './components/Header';
import TestsResults from './components/TestsResults';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Automation Dashboard" />
        <div className="container">
          <TestsResults />
        </div>
      </div>
    );
  }
}

export default App;
