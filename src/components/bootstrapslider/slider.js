import React from 'react';
import './slider.css';
import { RiArrowLeftSLine,  RiArrowRightSLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";
function Slider() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide bootstrapcarousel" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640530974/Omakwaenergy/image1_gkjzis.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <p className="section1 animated bounceInDown" style={{animationDelay:".4s"}}>
                                Your home of renewable energy resources.  We have a vision and the passion to drive an increase in Nigeria’s energy capacity and access
                            </p>                        
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640530975/Omakwaenergy/image2_n5mfnp.jpg" className="d-block w-100 " alt="..." style={{opacity:"0.8"}}/>
                        <div class="carousel-caption d-none d-md-block">
                            <p className="section1 animated slideInLeft" style={{animationDelay:".1s"}}>We uphold and promote the company’s core values of Integrity, Accountability, Reliability and Relationship</p>  

                            <button className="animated flipInX" style={{animationDelay:".4s"}}><NavLink to="/responsibilities" className="button-nav">Our CSR</NavLink></button>                      
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640530974/Omakwaenergy/image3_llnotq.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <p className="section1 animated bounceInUp" style={{animationDelay:".3s"}}>
                                We are committed to providing services that satisfy our clients’ business and domestic needs with integrity and honesty without compromising standards and quality.
                            </p>                        
                        </div>
                        
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                   
                    <span>< RiArrowLeftSLine aria-hidden="true" className="slider-arrow"/></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                   
                    <span><RiArrowRightSLine aria-hidden="true" className="slider-arrow" /></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}

export default Slider
