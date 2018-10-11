const reducer = (state ={}, action) => {
    switch (action.type) {
        case "SAY_HELLO":
            return {...state, say:'Hello World :'}
        default:
            return state
    }
}

export default reducer;