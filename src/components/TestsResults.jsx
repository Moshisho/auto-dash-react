import React, { Component } from 'react'
import TestResult from './TestResult';

class TestsResults extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }
  state = {
    testResults: [
      {
        id: 1,
        name: "testThis",
        status: "failed",
        reason: "assert failed"
      },
      {
        id: 2,
        name: "testThat",
        status: "passed",
        reason: ""
      },
      {
        id: 3,
        name: "testThat2",
        status: "inconclusive",
        reason: "env problem"
      }
    ]
  }
  render() {
    const { testResults } = this.state;
    return (
      <React.Fragment>
        {testResults.map(tResult => (
          <TestResult key={tResult.id} result={tResult} />
          ))}
      </React.Fragment>
    )
  }
}

export default TestsResults;