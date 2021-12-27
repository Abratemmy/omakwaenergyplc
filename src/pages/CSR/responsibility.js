import React, { Component } from 'react';
import Otherpages from '../../components/otherpages/otherpages';
import Underline from '../../components/textunderline/textunderline';
import './csr.css';


export class Responsibility extends Component {
    render() {
        return (
            <div>
                <Otherpages title="Corporate Social Responsibility" pagetitle="CSR" />

                <div className="page-container">
                    <div className="csr-container">
                        <h1>Our sustainable approach</h1>
                            <Underline/>

                            <div className="csr-text">
                                Omakwa Energy is committed to the highest standards of corporate social responsibility in  all its 
                                services Working alongside its partners, the Company strives to ensure the safety of all staff and contractors, 
                                while minimising environmental impact, for the benefit of the communities in which it works and all its stakeholders.
                            </div>
                    </div>
                    
                </div>

                <div className="csr-background">
                    <div className="page-container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="csr-img">
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640530974/Omakwaenergy/image3_llnotq.jpg" alt="loading"  />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="csr-details">
                                    <h1 style={{color:'var(--mainBlue)'}}>BUSINESS CONDUCTS</h1>
                                    <Underline />
                                    <div className="csr-text wow slideInRight" data-wow-delay=".2s">
                                        At Omakwa Energy we are committed to maintaining the highest ethical standards in the personal and professional conduct of our employees, suppliers,
                                        contractors and consultants.At Omakwa Energy we are committed to maintaining the highest ethical 
                                        standards in the personal and professional conduct of our employees, suppliers, contractors and consultants.
                                    </div>
                                    <div className="csr-text wow slideInRight" data-wow-delay=".2s">
                                    We seek to conduct our business activities in a fair, honest and ethical manner. Every person connected with our
                                    company has individual responsibility for maintaining ethical standards in the workplace. We expect all employees
                                    and all working on behalf of the Company to be responsible 
                                    for fostering a proper environment and encouraging ethical practices in all areas of our business.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="" style={{background:'var(--backgroundColor'}}>     
                        <div className="page-container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="csr-img">
                                        <img src="" alt="loading" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="csr-details">
                                        <h1 style={{color:'var(--mainBlue)'}}>HUMAN RIGHTS</h1>
                                        <Underline />
                                        <div className="csr-text wow slideInRight" data-wow-delay=".2s">
                                        We have respect for human dignity and the rights of the individual.
                                        We support the principles of, and promote respect for, the Universal Declaration of Human Rights.
                                        </div>
                                        <div className="csr-text wow slideInRight" data-wow-delay=".2s">
                                        We show respect for people including our own staff, our neighbours, our partners and suppliers and contractors 
                                        and will not discriminate on the basis of ethnicity or gender. We are an equal rights employer and are committed to providing a working environment where all people
                                        have equal opportunities for employment and advancement based on their ability, professional qualifications and experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="csr-img">
                                    <img src="" alt="loading" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="csr-details">
                                    <h1 style={{color:'var(--mainBlue)'}}>HEALTH AND SAFETY</h1>
                                    <Underline />
                                    <div className="csr-text wow slideInRight" data-wow-delay="0.2s">
                                    The health and safety of ADM Energy employees, contractors, partners and those directly affected by its business 
                                    activities is of paramount importance to the Company. We are committed to providing a safe working environment for all and 
                                    commit to constantly assessing and monitoring health and safety risks and mitigating these to improve our performance.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="" style={{background:'var(--backgroundColor)'}}>
                        <div className="page-container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="csr-img">
                                        <img src="" alt="loading" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="csr-details">
                                        <h1 style={{color:'var(--mainBlue)'}}>ENVIRONMENT</h1>
                                        <Underline />
                                        <div className="csr-text">
                                        Protecting the environment is fundamental to our business. ADM Energy conducts its operations in a safe and
                                            environmentally responsible manner to the highest industry standards. The Company will comply with the legislation of each country in which it operates, 
                                        raising these minimum requirements when appropriate. It expects that its contractors match these same standards.
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
            </div>
        )
    }
}

export default Responsibility
