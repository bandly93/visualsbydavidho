import React, { Component } from 'react';
import Slider from '../../components/Slider.js';
import NvidiaOne from '../../assets/pictures/nvidia_one.jpg';
import NvidiaTwo from '../../assets/pictures/nvidia_two.jpg';
const navbarData  = require('../../data/navBarData.js');

class Nvidia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: imgUrl
        }
    }

    render() {
        const{ portfolio } = navbarData
        return(
            <Slider imageUrl={this.state.imageUrl} />
        )
    }
}

const imgUrl = [
    NvidiaOne,
    NvidiaTwo,
    "https://content.hwigroup.net/images/products_xl/251505/19/nvidia-geforce-gtx-980.jpg",
    "https://images3.alphacoders.com/571/571770.jpg"
]

 export default {
     component: Nvidia
}
 