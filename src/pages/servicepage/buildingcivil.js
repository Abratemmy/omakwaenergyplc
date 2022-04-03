import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Otherservices from './otherservices';

import './services.css'

export class Buildingcivil extends Component {
    render() {
        return (
            <div className="">
                <div className='civil-bg'>
                    <div className="page-container otherpages-container">
                        <h1 className="other-page-heading wow fadeInUp">Building & Civil Works</h1>
                        <div className="other-pages-span wow fadeInUpBig">
                            <NavLink to='/omakwaenergyplc' className="otherpage-navlink">Home </NavLink>  
                            > <span>Building & Civil works</span>
                        </div>
                    </div>
                </div>
                <div className='servicescontainer'>
                    <div className="page-container">
                        <div className="services-text">
                            (With all infrastructure including water,drainage,electricity,internal roads network, et cetera),
                            Hotels, markets, Housing Estates, School Buildings, High Rise Buildings, Sports Facilities, Malls et cetera
                        </div>
                        <div className="services-text">
                            Water works include, Municipal pipelines, Pumping stations and 
                            Associated Electro Mechanical works, water treatment and purification projects, Landscaping and Fountains.
                        </div>

                        <div className="services-text">
                            Road Works include all types, Earth, Bituminous and Asphaltic, Cement road Surfaces.
                        </div>
                    </div>
                </div>

                <div className="service-other">               
                    <Otherservices title1 ="DERDGING AND MARINE SERVICES" img1="https://res.cloudinary.com/hayteetech/image/upload/v1649024697/Omakwaenergy/dredging_fh6rj4.jpg"
                        url1="dredging_and_marine_services"

                        title2="ENVIRONMENTAL PROJECTS"
                        img2="https://res.cloudinary.com/hayteetech/image/upload/v1640532243/Omakwaenergy/media3_khjqku.jpg"
                        url2="environmetal_projects"

                        title3="OIL AND GAS OPERATIONS"
                        img3="https://res.cloudinary.com/hayteetech/image/upload/v1640530975/Omakwaenergy/image2_n5mfnp.jpg"
                        url3="oil_and_gas_operation"                
                    />
                </div>
            </div>
        )
    }
}

export default Buildingcivil
