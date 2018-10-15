const reducer = (state ={}, action) => {
    // debugger;
    switch (action.type) {
        case "ADD_FORM_DATA":
            return {...state, task1: action.data}
        case 'SAY_HELLO':
            return { ...state, say : 'Hello World Redux'  };
        case "T2_LOAN_AMOUNT":
            // let [loanAmount, interestRate, loanTerm] = state.task2;
            
            let updatedState = Object.assign({},state, {
                task2: {...state.task2, ...action.t2data}
            })
            return updatedState;
        default:
            return state
    }
}

export default reducer;