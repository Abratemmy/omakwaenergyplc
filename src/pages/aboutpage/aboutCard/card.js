import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './card.css';
import {IoIosArrowForward} from 'react-icons/io';
import WOW from 'wowjs';

export class Card extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }
    render(title, topic1,text1, link1, topic2,text2,link2, topic3,text3,link3) {
        return (
            <div className="aboutpage-card-container">
                <div className="card-title">{this.props.title}</div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12  wow fadeInUp" data-wow-delay=".1s" data-wow-duration="2s">
                        <NavLink exact to={`/about/${this.props.link1}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531488/Omakwaenergy/logo1_ltfwpm.png" alt="about-logo" />
                                    <h4>{this.props.topic1}</h4>
                                    <p>{this.props.text1}</p>
                                </div>
                                <div className="about-card-icon">
                                    <IoIosArrowForward className="about-icon-arrow" />
                                </div>
                            </div>
                           
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="2s">
                        <NavLink exact to={`/about/${this.props.link2}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531488/Omakwaenergy/logo2_ujtbzl.png" alt="about-logo" />
                                    <h4>{this.props.topic2}</h4>
                                    <p>{this.props.text2}</p>
                                </div>
                                <div className="about-card-icon">
                                    <IoIosArrowForward className="about-icon-arrow" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="2s">
                        <NavLink  exact to={`/about/${this.props.link3}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531488/Omakwaenergy/logo3_wyyobo.png" alt="about-logo" />
                                    <h4>{this.props.topic3}</h4>
                                    <p>{this.props.text3}</p>
                                </div>
                                <div className="about-card-icon">
                                    <IoIosArrowForward className="about-icon-arrow" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
