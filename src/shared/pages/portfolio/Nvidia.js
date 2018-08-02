import React, { Component } from 'react';
import Slider from '../../components/Slider.js';
import NvidiaOne from '../../assets/pictures/nvidia_one.jpg';
import NvidiaTwo from '../../assets/pictures/nvidia_two.jpg';

class Nvidia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: imgUrl
        }
    }

    render() {
        return(
            <Slider imageUrl={this.state.imageUrl} />
        )
    }
}

const imgUrl = [
    NvidiaOne,
    NvidiaTwo,
    NvidiaTwo,
]

 export default {
     component: Nvidia
}
 