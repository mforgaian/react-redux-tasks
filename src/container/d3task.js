import React from 'react'
import {connect } from 'react-redux'

import {addD3FormData} from '../actions'

let D3Task = ({loanAmount, handleChange}) => (
    <div>
        <label htmlFor=""> Loan Amount </label>
        <input type="range" name="" id="" min="0" max="100" value={loanAmount || "9"} onChange={handleChange}/>
        <input type="text" name="" value={ loanAmount || "9" } onChange={handleChange} id=""/>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    handleChange: (event) => { 
        dispatch(addD3FormData(event.target.value))
    }
})
  
const mapStateToProps = (state) => ({
    loanAmount: state.task2.loanAmount
})

export default D3Task = connect(
    mapStateToProps,
    mapDispatchToProps
  )(D3Task)
