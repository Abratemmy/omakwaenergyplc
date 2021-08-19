import React, { Component } from 'react';
import './slider1.css';
import slider1 from '../../images/image1.jpeg';
import slider2 from '../../images/image2.jpeg';
import slider3 from '../../images/image3.jpeg';

export class Slider1 extends Component {
    render() {
        return (
            <div className="slider">  
                <figure>
                    <img src={slider1} alt="loading" />
                    <img src={slider2} alt="loading" />
                    <img src={slider3} alt="loading" />
                    <img src={slider1} alt="loading" />
                </figure>
            </div>
        )
    }
}

export default Slider1
