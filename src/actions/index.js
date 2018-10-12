export const sayHello = () => ({
    type:"SAY_HELLO"
})

export const addFormData = data => {
    return {    
        type: "ADD_FORM_DATA",
        data
    }
}

export const addD3FormData = t2data => {
    return {    
        type: "T2_LOAN_AMOUNT",
        t2data
    }
}

// export {addFormData, sayHello};