import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../../pages/aboutpage/about';
import Partners from '../../pages/aboutpage/partners';
import Purposes from '../../pages/aboutpage/purposes';
import Strategy from '../../pages/aboutpage/strategy';
import Contact from '../../pages/contactpage/contact';
import Home from '../../pages/homepage/home';

const Router = ()=>(
    <Switch>
        <Route exact path = '/' component ={Home} />
        <Route exact path = '/about' component={About} />
            <Route exact path = '/about/purpose_values' component={Purposes} />
            <Route exact path='/about/strategy' component={Strategy} />
            <Route exact path="/about/our_customer_partner" component={Partners} />
        <Route exact path='/contact' component={Contact} />
        {/* <Route exact path='/contact_us' component = {Contact} /> */}
    </Switch>
)
export default Router