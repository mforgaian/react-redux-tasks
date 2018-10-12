const reducer = (state ={}, action) => {
    // debugger;
    switch (action.type) {
        case "ADD_FORM_DATA":
            return {...state, task1: action.data}
        case 'SAY_HELLO':
            return { ...state, say : 'Hello World Redux'  };
        case "T2_LOAN_AMOUNT":
            return Object.assign({},state, {
                task2: {loanAmount: action.loanAmount}
            })
        default:
            return state
    }
}

export default reducer;