import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io'


function Footer() {
    return (
        <div className="footer-page">
            <div className="footerpage1">
                <div className="page-container">
                    <div className="footer-logo">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640531387/Omakwaenergy/logo_dk7xih.svg" alt="footer-logo" />
                    </div>
                    <div className="container footer-address">
                        <div className="footer-address1">Omakwa Energy is located at No 1 Rumualogu- Uniport Road, Rumualogu Port Harcourt Rivers State, Nigeria.</div>
                        <div className="footer-address2">
                            <p><i className="fa fa-phone" /> Phone
                                <span>+234 708 887 9779</span>
                            </p>

                            <p><i className="fa fa-envelope" /> Email
                                <span className=""><a href="mailto:info@omakwaenergy.com" target="_blank" rel="noopener noreferrer" >info@omakwaenergy.com </a> <br />
                                    <a href="mailto:omakwaenergy@gmail.com" target="_blank" rel="noopener noreferrer" >omakwaenergy@gmail.com</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footerpagelogo">
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a> </li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a> </li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a> </li>
                    </ul>
                </div>

            </div>
            <div className="footerpage2">
                <div className="container">
                    Copyright © 2020 All Rights Reserved <span className=""><Link to='/' className="footer-link">Omakwa Energy Limited.</Link> </span>
                    <span className="footer-span-link">
                        ||
                        {/* <a href="omakwa.com/webmail" target="_blank"  rel="noopener noreferrer">Webmail </a> ||
                        <Link to='/privacy-policy' exact>Privacy Policy </Link>  ||  */}
                        <a href="https://temitope-olasode.netlify.app" target="_blank" rel="noopener noreferrer" > WebMaster  </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
