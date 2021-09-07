import React, { Component } from 'react';
import './slider1.css';
import firstslide from '../../images/image1.jpeg';
import secondslide from '../../images/image2.jpeg';
import thirdslide from '../../images/image3.jpeg';
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'

export class Slider1 extends Component {
    render() {
        return (
            <div className="slider">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={firstslide} alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <p className="section1 animated bounceInDown" style={{animationDelay:".4s"}}>
                                    Your home of renewable energy resources.  We have a vision and the passion to drive an increase in Nigeria’s energy capacity and access
                                </p>
                                
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img className=" w-100" src={secondslide} alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 className="animated bounceInRight" style={{animationDelay:"1s"}}>temmy at it </h5>
                                <p className="animated bounceInLeft" style={{animationDelay:"2s"}}>Omakwa energy</p>
                                <button class="animated bounceInRight" style={{animationDelay:"3s"}}>Read more</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={thirdslide} alt="Third slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 className="animated slideInDown" style={{animationDelay:"1s"}}> creative wanna finish this </h5>
                                <p className="animated fadeInUp" style={{animationDelay:"2s"}}>Omakwa energy</p>
                                <button className="animated slideInDown" style={{animationDelay:"3s"}}>Read more</button>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span>< RiArrowLeftSLine aria-hidden="true" className="slider-arrow"/></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span><RiArrowRightSLine aria-hidden="true" className="slider-arrow" /></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Slider1
