import React from 'react';
import './footer.css';
import logo from '../../images/logo.svg';
import { Link} from 'react-router-dom';
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io'
 

function Footer() {
    return (
        <div className="footer-page">
            <div className="footerpage1">
                <div className="page-container">
                    <div className="footer-logo">
                        <img src={logo} alt="footer-logo" />
                    </div>
                    <div className="container footer-address">
                        <div className="footer-address1">Omakwa Energy is located at No 10 Wiche Lane, 1 off Uniport Road Ndudor, Choba, Port Harcourt.Rivers State Nigeria.</div>
                        <div className="footer-address2">
                            <p><i className="fa fa-phone" /> Phone 
                            <span>+234 708 887 9779</span>
                            </p>
                            
                            <p><i className="fa fa-envelope" /> Email
                                <span className="">info@omakwaenergy.com <br />
                            ceo@omakwaenergy.com</span>
                            </p>            
                        </div>
                    </div>
                </div>
                <div className="footerpagelogo">
                    <ul>
                        <li><a href="https://facebook.com" target="_blank"  rel="noopener noreferrer"><FaFacebookSquare /></a> </li>
                        <li><a href="https://twitter.com" target="_blank"  rel="noopener noreferrer"><FaTwitterSquare /></a> </li>
                        <li><a href="https://linkedin.com" target="_blank"  rel="noopener noreferrer"><IoLogoLinkedin /></a> </li>
                    </ul>
                </div>
                
            </div>
            <div className="footerpage2">
                <div className="container">
                    Copyright © 2020 All Rights Reserved <span className=""><Link to='/' className="footer-link">Omakwa Energy Limited.</Link> </span>
                    <span className="footer-span-link">
                        ||
                        <a href="omakwa.com/webmail" target="_blank"  rel="noopener noreferrer">Webmail </a> ||
                        <Link to='/privacy-policy' exact>Privacy Policy </Link>  || 
                        <a href="https://abratemmy.github.io/myportfolio" target="_blank"  rel="noopener noreferrer" > WebMaster  </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
