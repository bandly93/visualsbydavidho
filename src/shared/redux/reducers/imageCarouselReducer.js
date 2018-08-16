const initialState = {
    currentImageIndex: 0,
    hamburgerActive: false,
}

function imageCarousel(state = initialState, action) {
    switch(action.type) {
        case "RIGHT_CAROUSEL": 
            return {
                ...state,
                currentImageIndex: action.data
            }
        case "LEFT_CAROUSEL":
            return {
                ...state,
                currentImageIndex: action.data
            }
        case "HAMBURGER_ACTIVE":
            return {
                ...state,
                hamburgerActive: action.data
            }
        default: 
            return state
    }
}

export default imageCarousel;