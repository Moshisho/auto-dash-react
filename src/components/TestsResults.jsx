import React, { Component } from 'react'
import TestResult from './TestResult';
import { Consumer } from '../context'

class TestsResults extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  render() {
    return (
      <Consumer>
        {value => {
          const { testResults } = value;
          return (
            <React.Fragment>
              {testResults.map(tResult => (
                <TestResult key={tResult.id} result={tResult} />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default TestsResults;