import React, { Component } from 'react'

const Context = React.createContext();

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
    ]
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
