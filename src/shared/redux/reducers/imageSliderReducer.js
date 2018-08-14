const initialState = {
    currentSliderIndex: 0,
    pageData: [
        'https://static1.squarespace.com/static/551f5ba4e4b0566549ca88b9/57d34aa1f7e0ab316f4019a8/599d23999f745681a73e1f73/1503470511041/IMGL9753.jpg',
        'https://static1.squarespace.com/static/551f5ba4e4b0566549ca88b9/t/599d2589e58c628e532632f4/1473465049088/',
        'https://static1.squarespace.com/static/551f5ba4e4b0566549ca88b9/t/55d6f53ce4b02a14e79966aa/1440150891102/_MG_0559.jpg?format=2500w',
    ]
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