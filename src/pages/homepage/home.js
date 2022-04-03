import React, { Component } from 'react';
import Underline from '../../components/textunderline/textunderline';
import './home.css';
import {NavLink} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import WOW from 'wowjs';
import Reactslick from '../../components/bootstrapslider/reactslick';
import {FaWindowRestore, FaRegAddressCard, FaHome} from "react-icons/fa";


export class Home extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="">
                <Reactslick />
                <div className="homepage-container">
                    {/* <div className="page-container">
                        <div className='homepage-first'>
                            <h1>Clean, reliable energy for your business or home</h1>
                            <p>Omakwa Energy provides reliable and sustainable energy services for small and medium businesses, large businesses and residents across all entities.</p>
                        </div>
                    </div> */}

                    <div className='page-container'>
                        <div className='home-card'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='home-card-content'>
                                        <div className="card card1 wow slideInDown"  data-wow-delay=".1s" >
                                            <div className="card-body">
                                                <FaWindowRestore className="card-icon" />
                                                <h5 className="card-title">CSR</h5>
                                                <p className="card-text">Omakwa Energy is committed to the highest standards of corporate social responsibility in  all its 
                                                    services Working alongside its partners,...</p>
                                                <NavLink to="/responsibilities" className="btn ">READ MORE</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='home-card-content'>
                                        <div className="card card2 wow slideInDown"  data-wow-delay=".3s" >
                                            <div className="card-body ">
                                                <FaRegAddressCard className="card-icon" />
                                                <h5 className="card-title">Careers</h5>
                                                <p className="card-text">Omakwa Energy is designed to be one of the fastest growing oil and gas company in Nigeria energy sector.</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='home-card-content'>
                                        <div className="card card3 wow slideInDown"  data-wow-delay=".5s" >
                                            <div className="card-body">
                                                <FaHome className="card-icon" />
                                                <h5 className="card-title">Values</h5>
                                                <p className="card-text" style={{textAlign:"left"}}>
                                                    <ul>
                                                        <li>Reliabilty</li>
                                                        <li>Integrity</li>
                                                        <li>Team Work</li>
                                                    </ul>
                                                </p>
                                                <p>Need an enquiry?</p>
                                                <NavLink to="/contact" className="btn">Contact Us</NavLink>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    <div className="home-about-text home-about-text2 wow pulse">
                                    The company is a consortium of highly skilled and experienced professionals dedicated to excellence, innovation and the adoption of systems approach to problem solving.
                                    </div>
                                </div>
                            </div>
                            <div className="button-navlink wow slideInUp" data-wow-delay=".6s" data-wow-offset="30">
                                <NavLink to="/about" target="_blank" className="nav">Learn More</NavLink>
                            </div>
                            
                        </div>
                    </div>

                    {/* home flagship section starts here */}
                    {/* <div className="home-flagship-container wow pulse">
                        <div className="page-container">
                            <div className="home-flagship">
                                <h1>Our flagship project</h1>
                                <div className="title-underline">
                                    <Underline />
                                </div>

                                <div className="row home-flagship-row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="home-flagship-subtitle">Quality Engineering to Our Clients</div>
                                    <div className="home-text">
                                    At Omakwa Energy, quality engineering is our watchword. 
                                    Our robust knowledge-based approach and dedication to quality and safety allow us to 
                                    provide innovative solutions to every part of the oil and gas industry.
                                    </div>
                                    <div className="home-text">
                                    At OmakwaEnergy, the renewable energy company 
                                    that executed this project, the building proves that Nigeria’s energy future has large off-grid potentials.
                                    </div>

                                    <div className="button-navlink" style={{paddingTop:'15px', paddingBottom:'20px'}}>
                                        <NavLink to='/projects' target="_blank" className="nav">See More Projects</NavLink>
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="home-flagship-image-section">
                                        <div className="home-flagship-image">
                                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531044/Omakwaenergy/project2_cyqobj.jpg" alt="project2" width="100%" />
                                        </div>
                                        <div className="home-flagship-image-text">..Powered by <br />
                                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531387/Omakwaenergy/logo_dk7xih.svg" alt="logo" width="100%"/>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> */}

                    {/* home service pages */}
                    <div className="home-service-container">
                        <div className="page-container">
                            <div className="home-service">
                                <h1>Our Services</h1>
                                <div className="title-underline">
                                    <Underline />
                                </div>
                                <div className="home-text home-service-text">
                                    {/* We are fast becoming the preferred provider of efficient Solar Power Solutions to leading
                                    companies, major oil companies, homes, schools, and Government <br />-we walk the talk.. */}
                                </div>

                                <div className="home-service-grid">
                                    <div className="row gx-1 home-service-row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 home-service-column wow fadeInDown" data-wow-delay=".1s">
                                            <div className="home-service-grid-style home-service-grid-style1">
                                                <NavLink to="/oil_and_gas_operation" className="home-service-nav">
                                                    <div className="img"><img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531488/Omakwaenergy/logo1_ltfwpm.png" alt="grid-logo"/></div>
                                                    <h4>OIL AND GAS OPERATIONS</h4>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 home-service-column home-service-column2 wow fadeInDown"  data-wow-delay=".3s">
                                            <div className="home-service-grid-style home-service-grid-style2">
                                                <NavLink to="/building_and_civil_works" className="home-service-nav">
                                                    <div className="img"><img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531488/Omakwaenergy/logo2_ujtbzl.png" alt="grid-logo"/></div>
                                                    <h4>BUILDING CIVIL WORKS</h4>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 home-service-column home-service-column3 wow fadeInDown"  data-wow-delay=".5s">
                                            <div className="home-service-grid-style home-service-grid-style3">
                                                <NavLink to="/dredging_and_marine_services" className="home-service-nav">
                                                    <div className="img"><img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531488/Omakwaenergy/logo3_wyyobo.png" alt="grid-logo"/></div>
                                                    <h4>DREDGING, SAND BLASTING/WINNING</h4>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6  home-service-column home-service-column4 wow fadeInDown"  data-wow-delay=".7s">
                                            <div className="home-service-grid-style home-service-grid-style4">
                                                <NavLink to="/environmetal_projects" className="home-service-nav">
                                                    <div className="img"><img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531487/Omakwaenergy/logo4_ohksyp.png" alt="grid-logo"/></div>
                                                    <h4>ENVIRONMENTAL PROJECTS</h4>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='home-picture'>
                        <div className='page-container'>
                            <h1>More Than Just Power</h1>
                            <p>We are constantly innovating, bringing new initiatives and services to deliver value to you.​</p>
                            <div className='row'>
                                <div className='col-lg-8 col-md-8 col-sm-12'>
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1649020662/Omakwaenergy/image1_fssxxk.jpg" alt="pics" width="100%" />
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640532888/Omakwaenergy/9_elnlft.jpg" alt="pics" />

                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640532407/Omakwaenergy/project2_sfpukz.jpg" alt="pic" />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* home contact start here */}
                    <div className="home-contact">
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
                                <a href='http://eepurl.com/hQW_ef' target="_blank" className="nav">Sign Up</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
