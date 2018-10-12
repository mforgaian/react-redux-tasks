import React from 'react'
import {connect } from 'react-redux'
import { sayHello } from '../actions'

let ConsoleCurrentState = ({ whatsUp, stateObject, saySomething }) => (
    <div>
        <p>For debugging only :)</p>
        <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
        <h2>{whatsUp}</h2>
        <button onClick={() => console.log('Redux State:',stateObject)} >
            Console Curretnt State
        </button>
    </div>
)

const mapStateToProps = (state) => ({
    whatsUp: state.say,
    stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
    saySomething: () => { dispatch(sayHello())}
})

export default ConsoleCurrentState = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConsoleCurrentState)