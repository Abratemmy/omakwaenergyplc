import React, { Component } from 'react'
import Otherpages from '../../components/otherpages/otherpages';
import {FaItchIo, FaPython} from 'react-icons/fa';
import {SiGumroad} from 'react-icons/si';
import {GiHealthDecrease} from 'react-icons/gi'
import Card from './aboutCard/card';

export class Strategy extends Component {
    render() {
        return (
            <div>
                <Otherpages title="Our Strategy" pagetitle="strategy"/>

                <div className="page-container">
                    <div className="strategy-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-strategy-container">
                                    <div className="about-strategy-icon wow slideInLeft" data-wow-duration="2s">
                                        <FaItchIo className="strategy-icon"/>
                                    </div>
                                    <div className="about-strategy-column">
                                        <h4>Improving Operational Efficiency</h4>
                                        <div className="about-strategy-text">
                                        Omakwa Energy creates value through systematic and repeatable actions that are clear and addressable for everyone in the company.
                                        We reduce waste in time, effort and materials as much as possible, while still producing a high-quality service or product.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-strategy-container">
                                    <div className="about-strategy-icon wow slideInRight" data-wow-duration="2s">
                                        <SiGumroad className="strategy-icon" />
                                    </div>
                                    <div className="about-strategy-column">
                                        <h4>To operate in a safe and environmentally responsible manner</h4>
                                        <div className="about-strategy-text">
                                            Omakwa Energy ensure that the surrounding environment is free from hazards that will warrant the safety of workers and employees and also residents near industrial operations.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-strategy-container">
                                    <div className="about-strategy-icon wow slideInLeft" data-wow-duration="2s">
                                        <FaPython className="strategy-icon"/>
                                    </div>
                                    <div className="about-strategy-column">
                                        <h4>Business Sustainability</h4>
                                        <div className="about-strategy-text">
                                        Omakwa Energy create long-term value by taking into consideration how the organization operates in the ecological, social, and economic environments. 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-strategy-container">
                                    <div className="about-strategy-icon wow slideInRight" data-wow-duration="2s">
                                        <GiHealthDecrease className="strategy-icon"/>
                                    </div>
                                    <div className="about-strategy-column">
                                        <h4>Health and Safety</h4>
                                        <div className="about-strategy-text">
                                        Omakwa believe and understand the role of good health in increasing both the quality and productivity of employees.
                                        </div>
                                    </div>
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
                     title="You may also be interested in:"
                    topic1="Omakwa at a glance"
                    text1="We offer contracting and support services on a wide variety of projects "
                    link1=""

                    topic2="Our Customers & partners"
                    text2="Omakwa Energy partners with several leading organizations in Engineering, Oil & Gas, and Consultancy services to bring satisfaction
                    to our esteemed customers"
                     link2="our_customer_partner"

                    
                    topic3="Our purpose" 
                    text3="We provide a complete range of Engineering, 
                    Oil & Gas, Architectural, Environmental and consultancy services to the satisfaction of our clients’ demand." 
                    link3="purpose_values"
                    />
                </div>

                <div className="hr-line">
                    <hr />
                </div>
            </div>
        )
    }
}

export default Strategy
