import React, { Component } from 'react';
import Otherpages from '../../components/otherpages/otherpages';
import Underline from '../../components/textunderline/textunderline';
import './about.css';
import Card from './aboutCard/card';
export class About extends Component {
    render() {
        return (
            <div>             
                <Otherpages title="About" pagetitle="About-us"/>
                        {/* about who we are */}
   
                <div className="page-container">
                    <div className="about-whoweare">
                        <h1 className="wow slideInLeft" data-wow-duration="2s">Who we are</h1>
                        <div className="title-underline">
                            <Underline />
                        </div>
                        <div className="about-whoweare-text wow fadeInUp" data-wow-duration="2s">
                            <span>OMAKWA ENERGY INTEGRATED SERVICES LTD </span> 
                            was formally incorporated under the laws of the federal republic of Nigeria with RC No: 1344914 as an indigenous private limited liability company. The company is a consortium of highly skilled and experienced 
                            professionals dedicated to excellence, innovation and the adoption of systems approach to problem solving. 
                        </div>

                        <div className="about-whoweare-text  wow fadeInUp" data-wow-duration="2s">
                        The inclusion of consultants from the institutions of higher learning in the Omakwa team gives the company an edge in retaining 
                        the services of leaders in various fields and thus maintain a leading edge in providing high quality services.
                        </div>

                        {/* <div className="about-whoweare-text">
                        The company provides a complete range of Engineering, 
                        Oil & Gas, Architectural, Environmental and consultancy services to the satisfaction of our clients’ demand.
                        </div> */}
                        <div className="">
                            At Omakwa Energy Integrated Services Ltd, we uphold and promote the company’s Core Values of;
                        </div>
                        <ul>
                            <li className="about-list">Team Work</li>
                            <li className="about-list">Integrity and Accountability</li>
                            <li className="about-list">Passion and Quality</li>
                            <li className="about-list">Reliability</li>
                            <li className="about-list">Relationship</li>
                        </ul>
                    </div>
                </div>        
                <div className="hr-line">
                    <hr />
                </div>
                

                <div className="page-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="vision-mission-column">
                                <h1>Our vision</h1>
                                <div className="vision-mission-text">
                                    Omakwa Energy Integrated Services Limited is committed to providing services that satisfy our 
                                    clients’ business and domestic needs with integrity and honesty without compromising standards and quality.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="vision-mission-column">
                                <h1>Our mission</h1>
                                <div className="vision-mission-text">
                                    Omakwa Energy Integrated Services Limited is guided by her core
                                    business values to becoming the company of choice in delivering top quality services to clients and partners.
                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line">
                    <hr />
                </div>

                <div className="page-container">          
                    <Card
                        title="Learn more about Omakwa Energy:" 
                        topic1="Our purpose" 
                        text1="We provide a complete range of Engineering, 
                        Oil & Gas, Architectural, Environmental and consultancy services to the satisfaction of our clients’ demand." 
                        link1="purpose_values"
                        
                        topic2="Our Strategy"
                        text2="Develop a portfolio of assets targeting oil & gas exploration in West Africa."
                        link2="strategy"
                        
                        topic3="Our Customers & partners"
                        text3="Omakwa Energy partners with several leading organizations in Solar Power to deliver cutting edge and
                         sustainable energy to our esteemed customers"
                         link3="our_customer_partner"

                        topic4="Testimonies"
                        text4="We dont disssapoint our Clients.We are alwats at the top of what we do. check to view our customers review"          
                        link4="testimony"
                    />
                </div>

                <div className="hr-line">
                    <hr />
                </div>
            </div>
        )
    }
}

export default About
