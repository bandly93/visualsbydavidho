const initialState = {
    currentImageIndex: 1
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
        default: 
            return state
    }
}

export default imageCarousel;