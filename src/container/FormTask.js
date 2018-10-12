import React from "react";
import Table from './Table';
import Form from './Form';

import {connect } from 'react-redux'
import {addFormData} from '../actions'

let FormTask = ({handleSubmit}) => (
    <div className="container">
        <Form handleSubmit={handleSubmit} />
        <hr/>
        <Table />
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (statedata) => { 
        dispatch(addFormData(statedata))
    }
})
  
export default FormTask = connect(
    null,
    mapDispatchToProps
  )(FormTask)