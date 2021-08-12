import React, { Component } from 'react'
import Otherpages from '../../components/otherpages/otherpages'
import Card from './aboutCard/card'

export class Partners extends Component {
    render() {
        return (
            <div>
                <Otherpages title="Customers and Patners" pagetitle="clients"/>

                <div className="page-container">
                    <Card
                            title="You may also be interested in:" 

                            topic1="Omakwa at a glance"
                            text1="We offer contracting and support services on a wide variety of projects "
                            link1=""

                            topic2="Our purpose" 
                            text2="We provide a complete range of Engineering, 
                            Oil & Gas, Architectural, Environmental and consultancy services to the satisfaction of our clients’ demand." 
                            link2="purpose_values"
                            
                            topic3="Our Strategy"
                            text3="Develop a portfolio of assets targeting oil & gas exploration in West Africa."
                            link3="strategy"

                            topic4="Testimonies"
                            text4="We dont disssapoint our Clients.We are alwats at the top of what we do. check to view our customers review"          
                            link4="testimony"
                        />
                    </div>

                    <div className="hr-line">
                        <hr />
                    </div>
            </div>
        )
    }
}

export default Partners
