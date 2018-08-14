import React, { Component } from 'react';
import Carousel from '../components/Carousel.js';
const carouselData = require('../data/carouselData.js');

const { imgUrl, imgText } = carouselData

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: imgUrl,
            imageText: imgText
        }
    }

    render() {

        return(
            <div>
                <Carousel 
                backgroundImage={this.state.imageUrl} 
                text={this.state.imageText} />
            </div>
        )
    }
}

 export default {
     component: FrontPage
}
 
