import React from "react";
import Table from './Table';
import Form from './Form';

import {connect } from 'react-redux'
import {addFormData} from '../actions'

let FormTask = ({stateObject, handleSubmit}) => (
    <div className="container">
        <Form handleSubmit={handleSubmit} />
        <hr/>
        <Table />
    </div>
)

const mapStateToProps = (state) => ({
    stateObject: state
})
  
const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (statedata) => { 
        dispatch(addFormData(statedata))
    }
})
  
export default FormTask = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormTask)