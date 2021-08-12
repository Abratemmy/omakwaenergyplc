import React, { Component } from 'react';
import Underline from '../../components/textunderline/textunderline';
import './home.css';
import {NavLink} from 'react-router-dom';
import flagshipproject from '../../images/project2.jpeg';
import logo from '../../images/logo.svg';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import logo4 from '../../images/logo4.png';
import {BsArrowRight} from 'react-icons/bs';
import WOW from 'wowjs';

export class Home extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="homepage-container">
                <div className="homepage">
                    <div className="page-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="home-about-column">
                                    <h1 className="wow slideInLeft">Who We are</h1>
                                    <Underline />
                                    <div className="home-about-text wow pulse">
                                    OMAKWA ENERGY INTEGRATED SERVICES LTD was formally incorporated under the laws of the federal republic of Nigeria, with RC No: 1344914 to deliver quality service to Agencies, the oil, gas and allied industries without compromising standard. The company provides a complete range 
                                    of Engineering, Oil & Gas, and consultancy services to the satisfaction of our clients’ demands.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">

                            </div>
                        </div>
                        <div className="button-navlink wow slideInUp" data-wow-delay=".6s" data-wow-offset="30">
                            <NavLink to='/about' target="_blank" className="nav">Learn More</NavLink>
                        </div>
                        
                    </div>
                </div>

                {/* home flagship section starts here */}
                <div className="home-flagship-container wow pulse">
                    <div className="page-container">
                        <div className="home-flagship">
                            <h1>Our flagship project</h1>
                            <div className="title-underline">
                                <Underline />
                            </div>

                            <div className="row home-flagship-row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="home-flagship-subtitle">Living Off-The-Grid In Nigeria</div>
                                <div className="home-text">
                                Within the newly developed Guzape District in the heart of Abuja lies a unique 10-apartment block building, 
                                running totally off the grid with a combination of wind and solar hybrid providing enough 
                                electricity for the residential apartments, including air conditioning and solar water heating systems.
                                </div>
                                <div className="home-text">
                                At OmakwaEnergy, the renewable energy company 
                                that executed this project, the building proves that Nigeria’s energy future has large off-grid potentials.
                                </div>

                                <div className="button-navlink" style={{paddingTop:'15px'}}>
                                    <NavLink to='/projects' target="_blank" className="nav">See More Projects</NavLink>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="home-flagship-image-section">
                                    <div className="home-flagship-image">
                                        <img src={flagshipproject} alt="project2" width="100%" />
                                    </div>
                                    <div className="home-flagship-image-text">..Powered by <br />
                                        <img src={logo} alt="logo" width="100%"/>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* home service pages */}
                <div className="home-service-container">
                    <div className="page-container">
                        <div className="home-service">
                            <h1>Our Services</h1>
                            <div className="title-underline">
                                <Underline />
                            </div>
                            <div className="home-text home-service-text">
                                We are fast becoming the preferred provider of efficient Solar Power Solutions to leading
                                companies, major oil companies, homes, schools, and Government <br />-we walk the talk..
                            </div>

                            <div className="home-service-grid">
                                <div className="row gx-1 home-service-row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 home-service-column wow fadeInDown" data-wow-delay=".3s">
                                        <div className="home-service-grid-style home-service-grid-style1">
                                            <div className="img"><img src={logo1} alt="grid-logo"/></div>
                                            <h4>OIL AND GAS OPERATIONS</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 home-service-column home-service-column2 wow fadeInDown"  data-wow-delay=".5s">
                                        <div className="home-service-grid-style home-service-grid-style2">
                                            <div className="img"><img src={logo2} alt="grid-logo"/></div>
                                            <h4>BUILDING CIVIL WORKS</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 home-service-column home-service-column3 wow fadeInDown"  data-wow-delay=".7s">
                                        <div className="home-service-grid-style home-service-grid-style3">
                                        <div className="img"><img src={logo3} alt="grid-logo"/></div>
                                            <h4>DREDGING, SAND BLASTING/WINNING</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6  home-service-column home-service-column4 wow fadeInDown"  data-wow-delay=".9s">
                                        <div className="home-service-grid-style home-service-grid-style4">
                                        <div className="img"><img src={logo4} alt="grid-logo"/></div>
                                            <h4>ENVIRONMENTAL PROJECTS</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="button-navlink" style={{paddingTop:'15px'}}>
                                    <NavLink to='/services' target="_blank" className="nav">View More</NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* home-signup  */}
                <div className="page-container home-container-signup">
                    <div className="home-signup">
                        <div className="home-flagship-title home-signup-title">
                            <h1>Sign up to explore</h1>                        
                        </div>

                        <div className="home-text">
                            We are a leading renewable energy and power solutions company. We have a vision and the passion to drive an increase in Nigeria’s energy capacity and access,
                            create business and employment for thousands of young people through our academy training programmes. Sigup below:
                        </div>
                        <div className="button-navlink" style={{paddingTop:'15px'}}>
                            <NavLink to='/signup' target="_blank" className="nav">Sign Up</NavLink>
                        </div>
                    </div>
                </div>

                 {/* home contact start here */}
                 <div className="home-contact">
                    <div className="container home-contact-container">
                        <div className="">
                            <h3>Try Our Range of Services <br /> Call us now!</h3>
                            <h6>Omakwa Energy Solution . . .</h6>
                            <div className="button-navlink" style={{paddingTop:'15px'}}>
                                <NavLink to='/contact' target="_blank" className="nav">Contact us <span><BsArrowRight className="icon-arrow"/></span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
