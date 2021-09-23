import React, { Component } from 'react'
import Otherservices from './otherservices';
import image1 from "../../images/(2).jpeg";
import image2 from "../../images/(4).jpeg";
import image3 from "../../images/(6).jpeg";

export class Dredging extends Component {
    render() {
        return (
            <div className="servicescontainer">
            <div className="page-container">
                <div className="services-text">
                    <span>At Omakwa Energy, </span> we excavate materials from a water environment. This is because we are improving
                     existing water features; reshaping land and water features to alter drainage, navigability, and commercial use.
                </div>

                <div className="services-text">
                    Our Dredging and Marine services are Reclamation, Sweeping Access, Channelization and maintenance of existing channels, shore protection, et cetera.
                </div>
            </div>

            <div className="service-other"> 
                <Otherservices 
                    title1="ENVIRONMENTAL PROJECTS"
                    img1={image2}
                    url1="environmetal_projects"

                    title2="BUILDING AND CIVIL WORKS"
                    img2={image2}
                    url2="building_and_civil_works"

                    title3 ="OIL AND GAS OPERATIONS" img3={image1}
                    url3="oil_and_gas_operation"

                               
                />
            </div>
        </div>
        )
    }
}

export default Dredging
