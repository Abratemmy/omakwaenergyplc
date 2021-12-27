import React, { Component } from 'react';
import Otherpages from '../../components/otherpages/otherpages';
import Otherservices from './otherservices';

import './services.css'

export class Buildingcivil extends Component {
    render() {
        return (
            <div className="servicescontainer">
                <Otherpages title="Building and Civil work" pagetitle="service" />
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

                <div className="service-other">               
                    <Otherservices title1 ="DERDGING AND MARINE SERVICES" img1="https://res.cloudinary.com/hayteetech/image/upload/v1640532889/Omakwaenergy/2_q1ybzd.jpg"
                        url1="dredging_and_marine_services"

                        title2="ENVIRONMENTAL PROJECTS"
                        img2="https://res.cloudinary.com/hayteetech/image/upload/v1640532890/Omakwaenergy/4_xq9bae.jpg"
                        url2="environmetal_projects"

                        title3="OIL AND GAS OPERATIONS"
                        img3="https://res.cloudinary.com/hayteetech/image/upload/v1640533185/Omakwaenergy/6_ano3hk.jpg"
                        url3="oil_and_gas_operation"                
                    />
                </div>
            </div>
        )
    }
}

export default Buildingcivil
