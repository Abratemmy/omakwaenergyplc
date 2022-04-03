import React, { Component } from 'react';
import Slider from 'react-slick';
import "./reactslick.css";

export class Reactslick extends Component {
  render() {
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:"homeslides"
      };
    return (
      <div style={{overflow: "hidden"}}>
          <div className='row gx-0' >
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='first-slide'>
                        <div className='page-container'>
                            <div className='wrapper'>
                                <div className='react-slick-title animated slideInDown' style={{animationDelay:'1s'}}>We render top notch </div>
                                <div className='wrap'>
                                    <ul className='dynamic-txts animated slideInUp'>
                                        <li><span className='animated slideInUp' style={{animationDelay:'.7s'}}>Engineering</span></li>
                                        <li><span className='animated slideInUp' style={{animationDelay:'.9s'}}>Oil and Gas</span></li>
                                        <li><span className='animated slideInUp' style={{animationDelay:'1.s'}}>Consultancy</span></li>
                                    </ul>
                                    <span className='react-slick-title1 animated slideInUp' style={{animationDelay:'1s'}} style={{position:"relative", top: "-3px"}}> services to the satisfaction of our clients’ demands.</span>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <Slider ref={c=> (this.slider = c)} {...settings} className="Slider">
                        <div className=" background-pictures background-image1" style={{}}>  </div>

                        <div className="background-pictures background-image3 "></div> 
                        <div className="background-pictures background-image2 "></div> 
                        <div className="background-pictures background-image4 "></div> 
                        <div className="background-pictures background-image5 "></div>                   
                    </Slider>
                </div>
          </div>
      </div>
    )
  }
}

export default Reactslick