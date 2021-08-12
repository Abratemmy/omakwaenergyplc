import React, { Component } from 'react'
import Otherpages from '../../components/otherpages/otherpages'
import Underline from '../../components/textunderline/textunderline';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import logo4 from '../../images/logo4.png';
import Card from './aboutCard/card';

export class Purposes extends Component {
    render() {
        return (
            <div className="">
                <Otherpages title="Our Purpose and Values" pagetitle="Our purpose" />

                <div className="page-container ">
                    <div className="aboutpurpose-container">
                        <h1 className="wow slideInLeft" data-wow-duration="2s">What We stand for</h1>
                        <Underline />
                        <div className="about-purpose-text wow fadeInUp" data-wow-duration="2s">
                            It is central policy of our group to conduct all activities in such a way that the health and safety of our personnel and clients 
                            are paramount while giving due consideration to the conservation needs of the work environment. 
                        </div>
                        <div className="about-purpose-text wow fadeInUp" data-wow-duration="2s">
                        Achievement of a safe and healthy work place is an integral component of Omakwa’s HSES policy.
                        </div>
                    </div>
                </div>

                <div className="about-purpose-container">
                    <div className="page-container">
                        <div className="row">
                            <div className="col-lg-5 colmd-12 col-sm-12">
                                <div className="about-purpose-values">
                                    <h1 className="slideInLeft" data-wow-duration="2s">Our Values</h1>
                                    <Underline />

                                    <div className="about-purpose-text">
                                    We uphold and promote the company’s core values of
                                    Integrity, Accountability, Reliability and Relationship.

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 colmd-12 col-sm-12">
                                <div className="about-purpose-column">
                                    <img src={logo1} alt="logo" className="img"/>

                                    <div className="about-purpose-title">
                                        <h4 className="wow slideInRight" data-wow-duration="1.5s">Environment</h4>
                                        <div className="about-purpose-text wow fadeInUp" data-wow-duration="2s">
                                            Omakwa Energy Integrated Services Limited subscribes to the view that man and his environment are mutually inseparable.
                                            We are ethically and morally bound to apply the best practicable environmentally friendly means to preserve air, water, soil, 
                                            plant and animal life from adverse effects of our operations and to control and if possible eliminate any potential impact that may arise.

                                        </div>
                                    </div>
                                </div>
                                <div className="hr-line">
                                    <hr />
                                </div>

                                <div className="about-purpose-column">
                                    <img src={logo2} alt="logo" className="img"/>

                                    <div className="about-purpose-title">
                                        <h4 className="wow slideInRight" data-wow-duration="1.5s">Health</h4>
                                        <div className="about-purpose-text wow fadeInUp" data-wow-duration="2s">
                                        Omakwa believe and understand the role of good health in increasing both the quality
                                        productivity of employees. Hence, the health of our employees and third party is of great and cardinal interest to us.

                                        </div>
                                    </div>
                                </div>

                                <div className="hr-line">
                                    <hr />
                                </div>

                                <div className="about-purpose-column">
                                    <img src={logo3} alt="logo" className="img"/>

                                    <div className="about-purpose-title">
                                        <h4 className="slideInRight" data-wow-duration="1.5s">Safety</h4>
                                        <div className="about-purpose-text wow fadeInUp" data-wow-duration="2s">
                                            Omakwa Energy Integrated Services Limited trains her staff to observe and exercise due care and diligence at
                                            times through exposure to standard safety procedures whilst all unsafe acts are discouraged in work place environment.
                                        </div>
                                    </div>
                                </div>

                                <div className="hr-line">
                                    <hr />
                                </div>

                                <div className="about-purpose-column">
                                    <img src={logo4} alt="logo" className="img"/>

                                    <div className="about-purpose-title">
                                        <h4 className="slideInRight" data-wow-duration="1.5s">Security</h4>
                                        <div className="about-purpose-text wow fadeInUp" data-wow-duration="2s">
                                        All our services are supported by strict adherence to contingency procedures meant 
                                        to minimize risk of accident and work with the relevant authorities and emergency services in an appropriate manner in the implementation of the contingency procedures.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* i want to export card here */}
                <div className="page-container">
                    <Card title="You may also be interested in:"
                        topic1="Omakwa at a glance"
                        text1="We offer contracting and support services on a wide variety of projects "
                        link1=""

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
            </div>
        )
    }
}

export default Purposes
