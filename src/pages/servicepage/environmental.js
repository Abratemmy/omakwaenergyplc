import React, { Component } from 'react'
import Otherpages from '../../components/otherpages/otherpages';
import Otherservices from './otherservices';
import "./services.css";

export class Environmental extends Component {
    render() {
        return (
            <div className="servicescontainer">
                <Otherpages title="Environmental Project" pagetitle="service" />
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
                    <Otherservices title1 ="OIL AND GAS OPERATIONS" img1="https://res.cloudinary.com/hayteetech/image/upload/v1640532889/Omakwaenergy/2_q1ybzd.jpg"
                        url1="oil_and_gas_operation"

                        title2="BUILDING AND CIVIL WORKS"
                        img2="https://res.cloudinary.com/hayteetech/image/upload/v1640532890/Omakwaenergy/4_xq9bae.jpg"
                        url2="building_and_civil_works"

                        title3="DERDGING AND MARINE SERVICES"
                        img3="https://res.cloudinary.com/hayteetech/image/upload/v1640533185/Omakwaenergy/6_ano3hk.jpg"
                        url3="dredging_and_marine_services"                
                    />
                </div>
            </div>
        )
    }
}

export default Environmental
