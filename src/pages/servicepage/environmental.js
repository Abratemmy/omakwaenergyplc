import React, { Component } from 'react'
import image1 from "../../images/(2).jpeg";
import image2 from "../../images/(4).jpeg";
import image3 from "../../images/(6).jpeg";
import Otherservices from './otherservices';
import "./services.css";

export class Environmental extends Component {
    render() {
        return (
            <div className="servicescontainer">
                <div className="page-container">
                    <div className="services-text">
                        Our environmental operations  are:
                        <ul>
                            <li>Environmental Impact Assessment</li>
                            <li>Environmental Monitoring and site Assessment</li>
                            <li>Oil spill/pollution control Response</li>
                            <li>Sludge treatment and Tank clean up</li>
                            <li>Remediation of Polluted site</li>
                            <li>Environmental Rig Support Services</li>
                            <li>Oil Spill Response Equipment and Materials Procurement</li>
                            <li>Oil Spill Clean up</li>
                            <li>Domestic and Industrial Waste Treatment</li>
                        </ul>
                    </div>
                </div>

                <div className="service-other"> 
                    <Otherservices title1 ="OIL AND GAS OPERATIONS" img1={image1}
                        url1="oil_and_gas_operation"

                        title2="BUILDING AND CIVIL WORKS"
                        img2={image2}
                        url2="building_and_civil_works"

                        title3="DERDGING AND MARINE SERVICES"
                        img3={image3}
                        url3="dredging_and_marine_services"                
                    />
                </div>
            </div>
        )
    }
}

export default Environmental
