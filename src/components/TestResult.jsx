import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context'

class TestResult extends Component {
  state = {
    showTestResult: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_TEST_RESULT', payload: id });
  };

  render() {
    const { showTestResult } = this.state;
    const { id, status, name, reason } = this.props.result;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>Result: {status}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showTestResult: !this.state.showTestResult
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                {showTestResult ? (<ul className="list-group">
                  <li className="list-group-item">Name: {name}</li>
                  <li className="list-group-item">Reason: {reason}</li>
                </ul>) : null
                }
              </h4>
            </div>
          );
        }}
      </Consumer>
    )
  };
}

TestResult.propTypes = {
  result: PropTypes.shape({
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reason: PropTypes.string,
  }).isRequired,
}

export default TestResult
