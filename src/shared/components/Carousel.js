import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leftCarousel } from '../redux/actions/actions.js';
import { rightCarousel } from '../redux/actions/actions.js';
import styles from '../css/Carousel.css';
const carouselData = require('../data/carouselData.js');

class Carousel extends Component {

    previousSlide = () => {
        const currentImageIndex = this.props.imageCarouselData.currentImageIndex
        console.log(this.props.imageCarouselData.currentImageIndex)
        const newIndex = currentImageIndex - 1
        console.log(newIndex)
        this.props.previousSlide(newIndex)
    }

    nextSlide = () => {
        const currentImageIndex = this.props.imageCarouselData.currentImageIndex
        const newIndex = currentImageIndex +  1
        this.props.nextSlide(newIndex)
    }

    render() {
        const { imgUrl, imgText } = carouselData
        return(
            <div>
                <div 
                    className="carousel" 
                    style={{backgroundImage:`url(${imgUrl[this.props.imageCarouselData.currentImageIndex]})`}}>
                </div>

                    <div className="carouselButtonRight" onClick={this.nextSlide} />

                    <div className="carouselButtonLeft" onClick={this.previousSlide} />

                <div className="carouselText">
                    {imgText[this.props.imageCarouselData.currentImageIndex]}
                </div>
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
        nextSlide: (data) => {
            dispatch(rightCarousel(data))
        },
        previousSlide: (data) => {
            dispatch(leftCarousel(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
// export default Carousel;