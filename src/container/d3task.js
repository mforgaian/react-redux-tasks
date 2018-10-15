import React from 'react'
import { connect } from 'react-redux'
import PieChart from 'react-minimal-pie-chart';

import { addD3FormData } from '../actions'

let D3Task = ({ loanAmount, interestRate, loanTerm, totalpayable, interestPayable, handleChange }) => (
    <div>
        <label htmlFor=""> Loan Amount </label>
        <input type="range" name="loanAmount" id="" min="100000" max="100000000" value={loanAmount} onChange={handleChange} />
        <input type="text" name="loanAmount" value={loanAmount} onChange={handleChange} id="" />
        <br />
        <label htmlFor=""> Interest Rate </label>
        <input type="range" name="interestRate" id="" min="8" max="16" value={interestRate} onChange={handleChange} />
        <input type="text" name="interestRate" value={interestRate} onChange={handleChange} id="" />
        <br />
        <label htmlFor=""> Loan Term </label>
        <input type="range" name="loanTerm" id="" min="1" max="35" value={loanTerm} onChange={handleChange} />
        <input type="text" name="loanTerm" value={loanTerm} onChange={handleChange} id="" />
        <div>
            <p>Principle: {loanAmount}</p>
            <p>Interest Payable: {interestPayable}</p>
            <p>Total amount Payable: {totalpayable}</p>
        </div>
        <div style={{
            maxWidth: '15vw',
            margin: '0 auto',
        }}>
            <PieChart
                data={[
                    { title: 'Priniciple', value: parseInt(loanAmount), color: '#E38627' },
                    { title: 'Interest', value: interestPayable, color: '#C13C37' },
                ]}
            />;
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    handleChange: (event) => {
        const { name, value } = event.target;
        dispatch(addD3FormData({ [name]: value }))
    }
})

const mapStateToProps = (state) => {
    let totalpayable = Math.round(state.task2.loanAmount * (Math.pow(1 + (state.task2.interestRate / 100), state.task2.loanTerm)));
    let interestPayable = Math.round(state.task2.loanAmount * (Math.pow(1 + (state.task2.interestRate / 100), state.task2.loanTerm)) - state.task2.loanAmount);
    return ({
        loanAmount: state.task2.loanAmount,
        interestRate: state.task2.interestRate,
        loanTerm: state.task2.loanTerm,
        totalpayable: totalpayable,
        interestPayable: interestPayable
    }
    )
}

export default D3Task = connect(
    mapStateToProps,
    mapDispatchToProps
)(D3Task)
