import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import './Navbar.css';
import logo from '../../images/logo.svg';

function Navbar() {

    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    const [navbar, setNavbar] = useState(false);

    
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
                                <NavLink to="/about"activeClassName="active" className="nav-links " onClick={handleClick}>About us</NavLink>
                           
                            <div className="nav-dropdown">
                                <NavLink to="/about/purpose_values" className="nav-dropdown-nav">Our purpose</NavLink>
                                <NavLink to="/about/strategy" className="nav-dropdown-nav">Our strategy</NavLink>
                                <NavLink to="/about/our_customer_partner" className="nav-dropdown-nav">Customers & Partners</NavLink>
                                <NavLink to="/testimony" className="nav-dropdown-nav">testimony</NavLink>
                            </div>                    
                            </li> </span>
                        <li className="nav-item">
                            <NavLink to="/services" activeClassName="active" className="nav-links" onClick={handleClick}>Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/media"activeClassName="active" className="nav-links" onClick={handleClick}>Media</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/csr"activeClassName="active" className="nav-links" onClick={handleClick}>CSR</NavLink>
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
