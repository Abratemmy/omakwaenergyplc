import React, { Component } from 'react'
import Otherservices from './otherservices';
import "./services.css";
import { NavLink } from 'react-router-dom';

export class Environmental extends Component {
    render() {
        return (
            <div className="">
                <div className='environmental-bg'>
                    <div className="page-container otherpages-container">
                        <h1 className="other-page-heading wow fadeInUp">Environmental Project</h1>
                        <div className="other-pages-span wow fadeInUpBig">
                            <NavLink to='/omakwaenergyplc' className="otherpage-navlink">Home </NavLink>  
                            > <span>Environmental</span>
                        </div>
                    </div>
                </div>
                <div className='servicescontainer'>
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
                </div>

                <div className="service-other"> 
                    <Otherservices title1 ="OIL AND GAS OPERATIONS" img1="https://res.cloudinary.com/hayteetech/image/upload/v1640530975/Omakwaenergy/image2_n5mfnp.jpg"
                        url1="oil_and_gas_operation"

                        title2="BUILDING AND CIVIL WORKS"
                        img2="https://res.cloudinary.com/hayteetech/image/upload/v1649025060/Omakwaenergy/civil_tjamge.jpg"
                        url2="building_and_civil_works"

                        title3="DERDGING AND MARINE SERVICES"
                        img3="https://res.cloudinary.com/hayteetech/image/upload/v1649024697/Omakwaenergy/dredging_fh6rj4.jpg"
                        url3="dredging_and_marine_services"                
                    />
                </div>
            </div>
        )
    }
}

export default Environmental
