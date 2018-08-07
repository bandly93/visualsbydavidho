const initialState = {
    currentSliderIndex: 0,
    pageData: []
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
        case "PAGE_DATA":
            return {
                ...state,
                pageData: action.data
            }
        default: 
            return state
    }
}

export default imageSlider;