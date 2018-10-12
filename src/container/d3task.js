import React from 'react'
import {connect } from 'react-redux'

import {addD3FormData} from '../actions'

let D3Task = ({loanAmount,interestRate, loanTerm, handleChange}) => (
    <div>
        <label htmlFor=""> Loan Amount </label>
        <input type="range" name="loanAmount" id="" min="0" max="10000000" value={loanAmount} onChange={handleChange}/>
        <input type="text" name="loanAmount" value={ loanAmount } onChange={handleChange} id=""/>
        <br/>
        <label htmlFor=""> Interest Rate </label>
        <input type="range" name="interestRate" id="" min="8" max="16" value={interestRate} onChange={handleChange}/>
        <input type="text" name="interestRate" value={ interestRate } onChange={handleChange} id=""/>
        <br/>
        <label htmlFor=""> Loan Term </label>
        <input type="range" name="loanTerm" id="" min="1" max="35" value={loanTerm} onChange={handleChange}/>
        <input type="text" name="loanTerm" value={ loanTerm } onChange={handleChange} id=""/>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    handleChange: (event) => { 
        const {name, value} = event.target;
        dispatch(addD3FormData({[name]:value}))
    }
})
  
const mapStateToProps = (state) => ({
    loanAmount: state.task2.loanAmount,
    interestRate: state.task2.interestRate,
    loanTerm: state.task2.loanTerm,
})

export default D3Task = connect(
    mapStateToProps,
    mapDispatchToProps
  )(D3Task)
