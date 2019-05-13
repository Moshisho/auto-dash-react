import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TEST_RESULT':
      return {
        ...state,
        testResults: state.testResults.filter(tr => tr.id !== action.payload)
      }
    default:
      return {
        ...state
      }
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
