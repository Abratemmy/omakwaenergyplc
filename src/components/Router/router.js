import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../../pages/aboutpage/about';
import Partners from '../../pages/aboutpage/partners';
import Purposes from '../../pages/aboutpage/purposes';
import Strategy from '../../pages/aboutpage/strategy';
import Contact from '../../pages/contactpage/contact';
import Responsibility from '../../pages/CSR/responsibility';
import Error from '../../pages/error';
import Home from '../../pages/homepage/home';
import Media from '../../pages/Media/Media';

const Router = ()=>(
    <Switch>
        <Route exact path = '/omakwaenergyplc' component ={Home} />
        <Route exact path = '/about' component={About} />
            <Route exact path = '/about/purpose_values' component={Purposes} />
            <Route exact path='/about/strategy' component={Strategy} />
            <Route exact path="/about/our_customer_partner" component={Partners} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path="/responsibilities" component={Responsibility} />
        <Route exact path='/media' component={Media} />
        <Route  component={Error} />
        
    </Switch>
)
export default Router