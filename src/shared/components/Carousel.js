import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leftCarousel } from '../redux/actions/actions.js';
import { rightCarousel } from '../redux/actions/actions.js';
import Background from '../assets/pictures/Express.png'
import styles from '../css/Carousel.css';
// import SlideThree from './Slides.js';



class Carousel extends Component {
    render() {

        const imgUrls = []

        const background = {
            backgroundImage: `url(https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            minWidth: '100vw',
            // position: 'absolute'
        }

        return(
            <div className="carousel" style={background}>
                {/* Welcome to the Carousel   */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imageCarouselData : state.imageCarousel,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        rightClick: (data) => {
            dispatch(rightCarousel(data))
        },
        leftClick: (data) => {
            dispatch(leftCarousel(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
// export default Carousel;