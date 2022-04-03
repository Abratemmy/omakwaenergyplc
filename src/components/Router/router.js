import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../../pages/aboutpage/about';
import Partners from '../../pages/aboutpage/partners';
import Purposes from '../../pages/aboutpage/purposes';
import Strategy from '../../pages/aboutpage/strategy';
import Contact from '../../pages/contactpage/contact';
import Responsibility from '../../pages/CSR/responsibility';
import Home from '../../pages/homepage/home';
import Media from '../../pages/Media/Media';
import Environmental from '../../pages/servicepage/environmental';
import Oilandgas from '../../pages/servicepage/oilandgas';
import Buildingcivil from '../../pages/servicepage/buildingcivil';
import Dredging from '../../pages/servicepage/dredging';
import Pagenotfound from '../error/error';
import Testing from '../testing';
import SuccessPage from '../../pages/contactpage/successPage';

const Router = ()=>(
    <Switch>
        <Route exact path = '/' component ={Home} />
        <Route exact path = '/about' component={About} />
            <Route exact path = '/about/purpose_values' component={Purposes} />
            <Route exact path='/about/strategy' component={Strategy} />
            <Route exact path="/about/our_customer_partner" component={Partners} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path="/responsibilities" component={Responsibility} />
        <Route exact path='/media' component={Media} />
        
        <Route exact path='/oil_and_gas_operation' component={Oilandgas} />
        <Route exact path='/environmetal_projects' component={Environmental} />
        <Route exact path='/building_and_civil_works' component={Buildingcivil} />
        <Route exact path='/dredging_and_marine_services' component={Dredging} />
        <Route exact path="/texting" component={Testing} />
        <Route exact path='/success_page' component={SuccessPage} />

        <Route component={Pagenotfound}/>
    </Switch>
)
export default Router