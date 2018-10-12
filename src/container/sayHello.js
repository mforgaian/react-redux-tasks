import React from 'react'
import {connect } from 'react-redux'
import {sayHello} from '../actions'

let Button = ({ whatsUp, stateObject, saySomething }) => (
    <div>
        <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
        <h2>{whatsUp}</h2>
        <button onClick={() => console.log('Redux State:',stateObject)} >Current State</button>
    </div>
)

const mapStateToProps = (state) => ({
    whatsUp: state.say,
    stateObject: state
  })
  
  const mapDispatchToProps = (dispatch) => ({
    saySomething: () => { dispatch(sayHello())}
  })
  
export default Button = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button)