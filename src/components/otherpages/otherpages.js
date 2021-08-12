import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './otherpages.css';
import WOW from 'wowjs';

export class Otherpages extends Component {


    componentDidMount(){
        new WOW.WOW().init();
    }
    render(title, pagetitle) {
        return (
            <div>
                <div className="otherpages-background wow pulse">
                    <div className="page-container otherpages-container">
                        <h1 className="other-page-heading wow fadeInUp">{this.props.title}</h1>
                        <div className="other-pages-span wow fadeInUpBig">
                            <NavLink to='/omakwaenergyplc' className="otherpage-navlink">Home </NavLink>  
                            > <span>{this.props.pagetitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Otherpages
