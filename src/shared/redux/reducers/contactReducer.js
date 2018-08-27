const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
}

function contactReducer(state = initialState, action) {
    switch(action.type) {
        case 'CONTACT_FORM' :
            return {
                ...state,
                [action.name]: action.value
            }
        default: 
            return state
    }
}

export default contactReducer;