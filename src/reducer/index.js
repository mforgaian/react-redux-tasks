const reducer = (state ={}, action) => {
    switch (action.type) {
        case "ADD_FORM_DATA":
            return {...state, items: action.data}
        default:
            return state
    }
}

export default reducer;