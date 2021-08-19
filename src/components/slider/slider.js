import React, { Component } from 'react';
import './slider.css';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import WOW from 'wowjs';

export class SliderOne extends Component {
    
    render() {

        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 7000,
            className:[
                "homeslides1",
                "homeslides2"
            ]
        }
        return (
            <div>
               <Slider {...settings} className="slider-settings">
                    <div className="slider-background background-image1 homeslides2">
                        <div className="page-container">
                            <div className="content ">
                                <div className="content1">
                                    <h5 className="wow wow ">
                                        We are the preffered provider of efficient power backup and solar solutions to leading 
                                        businesses and government in nigeria
                                    </h5>

                                    <div className="button-navlink slider-btn1 ">
                                        <NavLink to='/projects' target="_blank" className="nav">Our Projects</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="slider-background background-image2">
                        <div className="page-container">
                            <div className="content">
                                <div className="content2 "  >
                                    <p>Your home of renewable energy solution</p>
                                    <span>Our dedication to excellent in Both Products and service delivery drive ourR 7D department</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-background background-image3">
                        <div className="page-container">
                            <div className="content">
                                <div className="content3">
                                    <div className="wrapper">
                                        <div className="static-text">We Provide a complete range of </div>
                                        <ul className="dynamic-texts">
                                            <li><span>Engineering, Oil & gas</span></li>
                                            <li><span>Environmental and consultancy</span></li>
                                
                                        </ul>
                                        <div className="">
                                            services to the satisfaction of our clients’ demand
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SliderOne
