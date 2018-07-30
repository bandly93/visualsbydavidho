const initialState = {
    currentSliderIndex: 0
}

function imageSlider(state = initialState, action) {
    switch(action.type) {
        case "RIGHT_SLIDER": 
            return {
                ...state,
                currentSliderIndex: action.data
            }
        case "LEFT_SLIDER":
            return {
                ...state,
                currentSliderIndex: action.data
            }
        default: 
            return state
    }
}

export default imageSlider;