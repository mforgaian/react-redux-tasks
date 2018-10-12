import React from 'react'
import {connect } from 'react-redux'

let ConsoleCurrentState = ({ stateObject }) => (
    <div>
        <p>For debugging only :)</p>
        <button onClick={() => console.log('Redux State:',stateObject)} >
            Console Curretnt State
        </button>
    </div>
)

const mapStateToProps = (state) => ({
    stateObject: state
})
  
export default ConsoleCurrentState = connect(
    mapStateToProps,
    null
)(ConsoleCurrentState)