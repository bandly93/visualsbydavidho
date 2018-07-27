import React, { Component } from 'react';
import styles from '../css/Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const imageUrl = this.props.imageUrl

        const imageUrlMap = imageUrl.map((images, i) => {
            return (
                <div key={i} className="images">
                    <img src={images}></img>
                </div>
            )
        })

        // Multiplay number of images in array by 100% to set width.
        // e.g if array has 4 images, then 400% width

        const widthStyle = (imageUrl.length * 100) + '%'

        const styles = {
            width: widthStyle,
        }

        console.log(styles)

        return (
            <div className="slider">
                <div className="subSlider" style={styles}>
                    {imageUrlMap}
                </div>
            </div>
        )
    }
}


export default Slider;