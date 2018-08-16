import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leftCarousel, rightCarousel } from '../redux/actions/actions.js';
import '../css/Carousel.css';

// Notes at bottom

class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    previousSlide = () => {
        const currentImageIndex = this.props.imageCarouselData.currentImageIndex
        const newIndex = currentImageIndex - 1
        
        if (newIndex < 0) {
            let newIndex = this.props.backgroundImage.length - 1
            this.props.previousSlide(newIndex)
        } else {
            this.props.previousSlide(newIndex)
        }
    }

    nextSlide = () => {
        const currentImageIndex = this.props.imageCarouselData.currentImageIndex
        const newIndex = currentImageIndex +  1

        if (newIndex > this.props.backgroundImage.length - 1) {
            let newIndex = 0;
            this.props.nextSlide(newIndex)
        } else {
            this.props.nextSlide(newIndex)
        }
    }

    render() {
        const hamburger = this.props.imageCarouselData.hamburgerActive;

        const backgroundStyle = {
            backgroundImage: `url(${this.props.backgroundImage[this.props.imageCarouselData.currentImageIndex]})`,
        }
        return(
            <div className="carouselContainer">
                <div 
                    className="carousel" 
                    style={backgroundStyle}>
                </div>
                
                <div className={hamburger ? 'inactive' : 'carouselText' }>
                    {this.props.text[this.props.imageCarouselData.currentImageIndex]}
                </div>

                    <div className={hamburger ? 'inactive' : 'rightButtonBox'}>
                        <div className="carouselButtonRight" onClick={this.nextSlide}>&#62;</div>
                    </div>

                    <div className={hamburger ? 'inactive' : 'leftButtonBox'}>
                        <div className="carouselButtonLeft" onClick={this.previousSlide}>&#60;</div>
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

// This component is completely reusable. 
// When passing data from higher order component, pass in as "backgroundImage" and "text"
// The constructor is to have other higher order component pass background images in as backgrounImage
// and the bottom left text as "text"
// This will keep redux store clean from these cluttered data and have this component reusable

// Note to self: When making this all fetched data, fetch data into array and put into redux store
// then use that state to replace current redux state.