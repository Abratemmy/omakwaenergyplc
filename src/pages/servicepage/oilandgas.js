import React, { Component } from 'react';
import Otherservices from './otherservices';
import './services.css';
import image1 from "../../images/(2).jpeg";
import image2 from "../../images/(4).jpeg";
import image3 from "../../images/(6).jpeg";

export class Oilandgas extends Component {
    render() {
        return (
            <div className="servicescontainer">
                <div className="page-container">
                    <div className="services-text">
                        <span>At Omakwa Energy, </span> We legally performs all the upstream operations and extracts crude oil and natural gas from hydrocarbon reservoirs. An oil operator contracts the drilling contractor to drill a well in the explored reservoir. 
                        The operator has expertise to explore hydrocarbon reservoirs, drill a well for appraisal testing, then once sufficient quantity is 
                        administered, task a drilling contractor to drill a well and conduct an economic production of hydrocarbons from it.
                    </div>

                    <div className="services-text">
                        Our oil and gas operator sector are:
                        <ul>
                            <li>Engineering and process designs</li>
                            <li>Process safety</li>
                            <li>Asset Integrity management</li>
                            <li>Metering</li>
                            <li>Automation</li>
                            <li>Instrumentation and calibration of field devices</li>
                            <li>Mechanical Maintenance and Valves Services</li>
                            <li>Electrical Installation and Maintenance</li>
                            <li>Pressure Testing</li>
                            <li>Manpower Supply and Management</li>
                            <li>Facilities Operations and maintenance</li>
                        </ul>
                    </div>
                </div>

                <Otherservices title1 ="BUILDING AND CIVIL WORKS" img1={image1}
                    url1="building_and_civil_works"

                    title2="ENVIRONMENTAL PROJECTS"
                    img2={image2}
                    url2="environmetal_projects"

                    title3="DERDGING AND MARINE SERVICES"
                    img3={image3}
                    url3="dredging_and_marine_services"                
                />
            </div>
        )
    }
}

export default Oilandgas
