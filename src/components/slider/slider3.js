import React, { Component } from 'react';
import './slider3.css';
import slider1 from '../../images/image1.jpeg';
import slider2 from '../../images/image2.jpeg';
import slider3 from '../../images/image3.jpeg';

export class Slider3 extends Component {
    render() {
        return (
            <div className="slider">
                <input type="radio" name="slider" checked="checked"/>
                <div className="imgbx">
                    <img src={slider1} />
                    <div className="content">
                        <h2>this is slider 1</h2>
                    </div>
                </div>

                <input type="radio" name="slider"/>
                <div className="imgbx">
                    <img src={slider2} />
                    <div className="content">
                        <h2>this is slider 2</h2>
                    </div>
                </div>

                <input type="radio" name="slider"/>
                <div className="imgbx">
                    <img src={slider3} />
                    <div className="content">
                        <h2>this is slider 3</h2>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Slider3
