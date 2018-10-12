let id = 0

export const sayHello = () => ({
    type:"SAY_HELLO"
})

export const addFormData = data => {
    return {    
        type: "ADD_FORM_DATA",
        id: id++,
        data
    }
}

// export {addFormData, sayHello};