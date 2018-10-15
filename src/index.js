import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'
import './index.css';
import App from './App';

const initialState = {
    task2:{
        loanAmount:'999999 ',
        loanTerm:'10',
        interestRate:'8'
    },
    task1:{
        address:'',
        name:'',
        email:'',
        gender:'',
        phone:'',
        country:''
    },
    say:''
}

const store = createStore(reducer, initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)