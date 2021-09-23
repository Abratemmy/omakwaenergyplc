import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import {RiArrowRightSLine } from "react-icons/ri";
import './Navbar.css';
import logo from '../../images/logo.svg';

function Navbar() {

    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    const [navbar, setNavbar] = useState(false);

    // code for hamburger dropdow when it is on small device
    const[arrow, showarrow] = useState(false);
    const handleArrow = () =>showarrow(!arrow);

    
    const changeBackground= ()=>{
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=130){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={navbar ? "navbar active":"navbar"}>
            <div className="nav-container">
                <div className="nav-logo">
                    <NavLink to='/'><img src={logo} alt="loading" /></NavLink>
                </div>

                <div className="nav-palava">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/omakwaenergyplc"exact activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                        </li>

                        <span className="dropdown-span">
                            <li className="nav-item nav-item-dropdown">
                                <div className="drop-palava">
                                    <a href="#"activeClassName="active" className="nav-links " onClick={handleArrow}>About us </a> 
                                    <span className="span-arrow"><RiArrowRightSLine className="droparrow" /></span>
                                </div>    
                                <div className="nav-dropdown">
                                    <NavLink to="/about" className="nav-dropdown-nav">Omakwa at a Glance</NavLink>
                                    <NavLink to="/about/purpose_values" className="nav-dropdown-nav">Our purpose</NavLink>
                                    <NavLink to="/about/strategy" className="nav-dropdown-nav">Our strategy</NavLink>
                                    <NavLink to="/about/our_customer_partner" className="nav-dropdown-nav">Customers & Partners</NavLink>
                                    <NavLink to="/testimony" className="nav-dropdown-nav">testimony</NavLink>
                                </div>                    
                            </li> 
                        </span>
                        <span className="dropdown-span">
                            <li className="nav-item nav-item-dropdown">
                                <a href="#" activeClassName="active" className="nav-links" onClick={handleClick}>Service</a>
                                <div className="nav-dropdown">
                                    <NavLink to="/oil_and_gas_operation" className="nav-dropdown-nav">Oil & Gas Operation</NavLink>
                                    <NavLink to="/environmetal_projects" className="nav-dropdown-nav">Environmental projects</NavLink>
                                    <NavLink to="/building_and_civil_works" className="nav-dropdown-nav">Building & Civil Works</NavLink>
                                    <NavLink to="/dredging_and_marine_services" className="nav-dropdown-nav">Dredging & Marine Services</NavLink>
                                </div>
                            </li>
                        </span>
                        <li className="nav-item">
                            <NavLink to="/media"activeClassName="active" className="nav-links" onClick={handleClick}>Media</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/responsibilities"activeClassName="active" className="nav-links" onClick={handleClick}>CSR</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact"activeClassName="active" className="nav-links" onClick={handleClick}>Contact us</NavLink>
                        </li>                    
                    </ul>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                        {click === true ? <div> 
                        <span className=""  onClick={handleClick} > <FiXCircle />   </span>
                        </div> : <div> 
                            <span className=""  onClick={handleClick} > <FiAlignRight />   </span>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
