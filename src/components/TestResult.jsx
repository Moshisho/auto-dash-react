import React from 'react'
import PropTypes from 'prop-types'

function TestResult(props) {
  const { status, name, reason } = props.result;
  return (
    <div className="card card-body mb-3">
      <h4>Result: {status}</h4>
        <ul className="list-group">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Reason: {reason}</li>
        </ul>
    </div>
  )
}

TestResult.propTypes = {
  result: PropTypes.shape({
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reason: PropTypes.string,
  }).isRequired,
}

export default TestResult
