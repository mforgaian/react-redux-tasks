export const sayHello = () => ({
    type:"SAY_HELLO"
})

export const addFormData = data => {
    return {    
        type: "ADD_FORM_DATA",
        data
    }
}

export const addD3FormData = loanAmount => {
    return {    
        type: "T2_LOAN_AMOUNT",
        loanAmount
    }
}

// export {addFormData, sayHello};