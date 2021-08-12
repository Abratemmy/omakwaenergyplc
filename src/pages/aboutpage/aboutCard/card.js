import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './card.css';
import logo1 from '../../../images/logo1.png';
import logo2 from '../../../images/logo2.png';
import logo3 from '../../../images/logo3.png';
import logo4 from '../../../images/logo4.png';
import {IoIosArrowForward} from 'react-icons/io';
import WOW from 'wowjs';

export class Card extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }
    render(title, topic1,text1, link1, topic2,text2,link2, topic3,text3,link3, topic4,text4,link4) {
        return (
            <div className="aboutpage-card-container">
                <div className="card-title">{this.props.title}</div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-delay=".3s" data-wow-duration="2s">
                        <NavLink exact to={`/about/${this.props.link1}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src={logo1} alt="about-logo" />
                                    <h4>{this.props.topic1}</h4>
                                    <p>{this.props.text1}</p>
                                </div>
                                <div className="about-card-icon">
                                    <IoIosArrowForward className="about-icon-arrow" />
                                </div>
                            </div>
                           
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="2s">
                        <NavLink exact to={`/about/${this.props.link2}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src={logo2} alt="about-logo" />
                                    <h4>{this.props.topic2}</h4>
                                    <p>{this.props.text2}</p>
                                </div>
                                <div className="about-card-icon">
                                    <IoIosArrowForward className="about-icon-arrow" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s" data-wow-duration="2s">
                        <NavLink  exact to={`/about/${this.props.link3}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src={logo3} alt="about-logo" />
                                    <h4>{this.props.topic3}</h4>
                                    <p>{this.props.text3}</p>
                                </div>
                                <div className="about-card-icon">
                                    <IoIosArrowForward className="about-icon-arrow" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="2s">
                        <NavLink  exact to={`/about/${this.props.link4}`} className="about-card-nav" >
                            <div className="card-background">
                                <div className="card-container">
                                    <img src={logo4} alt="about-logo" />
                                    <h4>{this.props.topic4}</h4>
                                    <p>{this.props.text4}</p>
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
