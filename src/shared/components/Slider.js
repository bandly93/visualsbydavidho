import React, { Component } from 'react';
import styles from '../css/Slider.css';
import { connect } from 'react-redux';
import { rightSlider, leftSlider } from '../redux/actions/actions.js';

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    nextSlide = () => {
        const imageSliderData = this.props.imageSliderData.currentSliderIndex
        const newIndex = imageSliderData +  1

        if (newIndex > this.props.imageUrl.length - 1) {
            let newIndex = 0;
            this.props.nextSlide(newIndex)
        } else {
            this.props.nextSlide(newIndex)
        }
    }

    previousSlide = () => {
        const imageSliderData = this.props.imageSliderData.currentSliderIndex
        const newIndex = imageSliderData - 1
        
        if (newIndex < 0) {
            let newIndex = this.props.imageUrl.length - 1
            this.props.nextSlide(newIndex)
        } else {
            this.props.nextSlide(newIndex)
        }
    }
    
    render() {
        const imageSliderData = this.props.imageSliderData.currentSliderIndex
        const imageUrl = this.props.imageUrl

        const imageUrlMap = imageUrl.map((images, i) => {
            return (
                <div key={i} className="images">
                    <img 
                    className={'active' + imageSliderData}
                    src={imageUrl[i + imageSliderData]}
                    ></img>
                </div>
            )
        })        

        // Multiplay number of images in array by 100% to set width.
        // e.g if array has 4 images, then 400% width

        const widthStyle = (imageUrl.length * 100) + '%'

        // const styles = {
        //     width: widthStyle,
        // }

        return (
            <div>
                <div className="slider">
                    <div className="subSlider" style={styles}>
                        {imageUrlMap}
                    </div>
                </div>

                <div className="rightSliderButtonBox">
                    <div className="sliderButtonRight" onClick={this.nextSlide}>&#62;</div>
                </div>

                <div className="leftSliderButtonBox">
                    <div className="sliderButtonLeft" onClick={this.previousSlide}>&#60;</div>
                </div>        
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imageSliderData : state.imageSlider,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nextSlide: (data) => {
            dispatch(rightSlider(data))
        },
        previousSlide: (data) => {
            dispatch(leftSlider(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Slider)
