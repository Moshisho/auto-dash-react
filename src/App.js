import React, { Component } from 'react';
import Header from './components/Header';
import TestsResults from './components/TestsResults';
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Automation Dashboard" />
          <div className="container">
            <TestsResults />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
