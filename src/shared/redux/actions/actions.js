export function rightCarousel(data) {
    return {
        type: "RIGHT_CAROUSEL",
        data
    }
}

export function leftCarousel(data) {
    return {
        type: "LEFT_CAROUSEL",
        data
    }
}
export function rightSlider(data) {
    return {
        type: "RIGHT_SLIDER",
        data
    }
}

export function leftSlider(data) {
    return {
        type: "LEFT_SLIDER",
        data
    }
}

// WHEN CLICKING ON LINKS UNDER PORTFOLIO TAB, IT WILL CALL THIS FUNCTION

export function handleFetch(e) {
    const { name } = e.currentTarget
    console.log(name);

    return (dispatch) => {
            return (
            fetch('/api' + name, {
                credentials: 'same-origin',
                method: 'GET',
                headers: {'Content-Type':'application/json'},
            })
            .then(res => res.json())
            .then(responseData => {
                if(responseData.status !== 400) {
                    dispatch(PageData(responseData))
                }
            })
        )
    }
}

export function PageData(responseData) {
    return {
        type: 'PAGE_DATA',
        data: responseData
    }
}

// TOGGLE HAMBURGER MENU

export function hamburgerActive(data) {
    return {
        type: 'HAMBURGER_ACTIVE',
        data
    }
}