import React, { Component } from 'react'
import Otherservices from './otherservices';
import {NavLink} from "react-router-dom";

export class Dredging extends Component {
    render() {
        return (
            <div className="">
                <div className='dredging-bg'>
                    <div className="page-container otherpages-container">
                        <h1 className="other-page-heading wow fadeInUp">Dredging & Marine Services</h1>
                        <div className="other-pages-span wow fadeInUpBig">
                            <NavLink to='/omakwaenergyplc' className="otherpage-navlink">Home </NavLink>  
                            > <span>Dredging $ Marine</span>
                        </div>
                    </div>
                </div>
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
                </div>
            

            <div className="service-other"> 
                <Otherservices 
                    title1="ENVIRONMENTAL PROJECTS"
                    img1="https://res.cloudinary.com/hayteetech/image/upload/v1640532243/Omakwaenergy/media3_khjqku.jpg"
                    url1="environmetal_projects"

                    title2="BUILDING AND CIVIL WORKS"
                    img2="https://res.cloudinary.com/hayteetech/image/upload/v1649025060/Omakwaenergy/civil_tjamge.jpg"
                    url2="building_and_civil_works"

                    title3 ="OIL AND GAS OPERATIONS" img3="https://res.cloudinary.com/hayteetech/image/upload/v1640530975/Omakwaenergy/image2_n5mfnp.jpg"
                    url3="oil_and_gas_operation"

                               
                />
            </div>
        </div>
        )
    }
}

export default Dredging
