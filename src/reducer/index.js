const reducer = (state ={}, action) => {
    switch (action.type) {
        case "SAY_HELLO":
            return {...state, say:'Hello World :'}
        case "ADD_FORM_DATA":
            return {...state, items: action.data}
        default:
            return state
    }
}

export default reducer;