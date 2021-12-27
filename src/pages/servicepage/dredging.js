import React, { Component } from 'react'
import Otherservices from './otherservices';
import Otherpages from '../../components/otherpages/otherpages';

export class Dredging extends Component {
    render() {
        return (
            <div className="servicescontainer">
                <Otherpages title="Dredging and Marine Service" pagetitle="service" />
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
                    img1="https://res.cloudinary.com/hayteetech/image/upload/v1640532890/Omakwaenergy/4_xq9bae.jpg"
                    url1="environmetal_projects"

                    title2="BUILDING AND CIVIL WORKS"
                    img2="https://res.cloudinary.com/hayteetech/image/upload/v1640533185/Omakwaenergy/6_ano3hk.jpg"
                    url2="building_and_civil_works"

                    title3 ="OIL AND GAS OPERATIONS" img3="https://res.cloudinary.com/hayteetech/image/upload/v1640532889/Omakwaenergy/2_q1ybzd.jpg"
                    url3="oil_and_gas_operation"

                               
                />
            </div>
        </div>
        )
    }
}

export default Dredging
