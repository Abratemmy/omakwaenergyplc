import React, { Component } from 'react';
import image1 from "../../images/(2).jpeg";
import image2 from "../../images/(4).jpeg";
import image3 from "../../images/(6).jpeg";
import Otherservices from './otherservices';
import './services.css'

export class Buildingcivil extends Component {
    render() {
        return (
            <div className="servicescontainer">
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
                    <Otherservices title1 ="DERDGING AND MARINE SERVICES" img1={image1}
                        url1="dredging_and_marine_services"

                        title2="ENVIRONMENTAL PROJECTS"
                        img2={image2}
                        url2="environmetal_projects"

                        title3="OIL AND GAS OPERATIONS"
                        img3={image3}
                        url3="oil_and_gas_operation"                
                    />
                </div>
            </div>
        )
    }
}

export default Buildingcivil
