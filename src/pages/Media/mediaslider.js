import React, { Component } from 'react';
import Slider from "react-slick";
import Media from './Media';

export class Mediaslider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 2
          };
        return (
            <div>
                <Slider {...settings}>
                    <Media />
                </Slider>
            </div>
        )
    }
}

export default Mediaslider
