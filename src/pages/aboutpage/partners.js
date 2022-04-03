import React, { Component } from 'react'
import Otherpages from '../../components/otherpages/otherpages'
import Underline from '../../components/textunderline/textunderline'
import Card from './aboutCard/card';
import Slider from "react-slick"
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"

export class Partners extends Component {
     
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);        
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            arrows:true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
            slidesToShow: 2,
            slidesToScroll: 1,
            className:"homeslides"
          };
        return (
            <div>
                <Otherpages title="Customers and Patners" pagetitle="clients"/>

                <div className="page-container">
                    <div className="about-partner">
                        <h1 className="text-center wow slideInLeft">Our Partners</h1>
                        <div className="title-underline">
                            <Underline/>
                        </div>
                        <div className="about-partner-text">
                            <div className="row">
                                <div className="col-lg-3 col-md-2 col-sm-12"></div>
                                <div className="col-lg-6 col-md-10 col-sm-12">
                                Omakwa Energy works with seasoned and world class OEMs in 
                                Solar Energy Equipment/Technology to bring clean and sustainable energy to to our valued Customers.
                                </div>
                                <div className="col-lg-3 col-md-2 col-sm-12"></div>
                            </div>
                       
                        </div>

                        <div className='partner-slide'>
                            <Slider ref={c=> (this.slider = c)} {...settings} className="Slider">
                                <div className='partner-img'>
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1648062472/Omakwaenergy/lemeridian_apeicx.png" alt="partner-image"/>
                                </div>
                                <div className=''>
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1648062472/Omakwaenergy/vks_qxmyhc.jpg" alt="partner-image"/>
                                </div>
                                        
                            </Slider>
                            {/* <div className="container">
                                <div className="homeslide-arrow" >
                                    <button className="arrow-btn prev" onClick={()=>this.slider.slickPrev()}><IoIosArrowBack  className="slider-arrow-left"/></button>
                                    <button className="arrow-btn next" onClick={()=>this.slider.slickNext()}><IoIosArrowForward className="slider-arrow-right" /></button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="page-container">
                    <Card
                            title="You may also be interested in:" 

                            topic1="Omakwa at a glance"
                            text1="We offer contracting and support services on a wide variety of projects "
                            link1=""

                            topic2="Our purpose" 
                            text2="We provide a complete range of Engineering, 
                            Oil & Gas, Architectural, Environmental and consultancy services to the satisfaction of our clients’ demand." 
                            link2="purpose_values"
                            
                            topic3="Our Strategy"
                            text3="Develop a portfolio of assets targeting oil & gas exploration in West Africa."
                            link3="strategy"

                        />
                    </div>

                    <div className="hr-line">
                        <hr />
                    </div>
            </div>
        )
    }
}

export default Partners
