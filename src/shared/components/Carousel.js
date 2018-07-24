import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leftCarousel } from '../redux/actions/actions.js';
import { rightCarousel } from '../redux/actions/actions.js';
import styles from '../css/Carousel.css';
const carouselData = require('../data/carouselData.js');

const { imgUrl, imgText } = carouselData

class Carousel extends Component {

    previousSlide = () => {
        const currentImageIndex = this.props.imageCarouselData.currentImageIndex
        const newIndex = currentImageIndex - 1

        console.log(currentImageIndex)
        if (currentImageIndex < 0) {
            let newIndex = imgUrl.length;
            console.log(newIndex, "newIndex")
            this.props.previousSlide(newIndex)
        } else {
            this.props.previousSlide(newIndex)
        }
        
        // console.log(newIndex, "byee");
    }

    nextSlide = () => {
        const currentImageIndex = this.props.imageCarouselData.currentImageIndex
        const newIndex = currentImageIndex +  1
        if (currentImageIndex > imgUrl.length) {
            newIndex == 0;
        }
        this.props.nextSlide(newIndex)
    }

    render() {

        const backgroundStyle = {
            backgroundImage: `url(${imgUrl[this.props.imageCarouselData.currentImageIndex]})`,
        }
        return(
            <div>
                <div 
                    className="carousel" 
                    style={backgroundStyle}>
                </div>
                <div className="carouselText">
                    {imgText[this.props.imageCarouselData.currentImageIndex]}
                </div>

                    <div className="rightButtonBox">
                        <div className="carouselButtonRight" onClick={this.nextSlide} />
                    </div>

                    <div className="leftButtonBox">
                        <div className="carouselButtonLeft" onClick={this.previousSlide} />
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