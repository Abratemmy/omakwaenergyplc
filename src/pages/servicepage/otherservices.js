import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Underline from '../../components/textunderline/textunderline'

export class Otherservices extends Component {
    render(img1, title1,url1, img2, title2, url2, img3, title3, url3) {
        return (
            <div className="otherservices-page">
                <div className="page-container">
                    <div className="otherservices-title">
                        <h1 className="text-center">Other services</h1>
                        <div className="title-underline">
                            <Underline />
                        </div>
                    </div>
                    <div className="service-card">
                        <div  className="service-section">
                            <NavLink to={`/${this.props.url1}`} className="otherservice-link">
                                <img src={this.props.img1} alt="loading" />
                                <div className="service-title">{this.props.title1}</div>
                            </NavLink>
                        </div>
                        <div  className="service-section section-noshow">
                            <NavLink to={`/${this.props.url2}`} className="otherservice-link">
                                <img src={this.props.img2} alt="loading" />
                                <div className="service-title">{this.props.title2}</div>
                            </NavLink>
                        </div>
                        <div  className="service-section section-noshow">
                            <NavLink to={`/${this.props.url3}`} className="otherservice-link">
                                <img src={this.props.img3} alt="loading" classname="serviceimg3" />
                                <div className="service-title">{this.props.title3}</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Otherservices
