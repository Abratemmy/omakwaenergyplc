import React from 'react';
import {NavLink} from "react-router-dom";

function SuccessPage() {
    return (
        <div className="form-success">
            <div className="container form-success-container">
                <p>Your form has been submitted successfully</p>
                <div className="success_text">Thank you for contacting us</div>

                <div className="button-navlink wow slideInUp" data-wow-delay=".6s" data-wow-offset="30">
                    <NavLink to='/' className="nav" style={{color:"#fff"}}>Go to Home</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage
