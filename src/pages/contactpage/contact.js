import React, { Component } from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';
import './contact.css'
import Underline from '../../components/textunderline/textunderline';
import { NavLink } from 'react-router-dom';
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import Geocode, { setApiKey } from "react-geocode";
import Form from './Form';

Geocode.setApiKey("AIzaSyBdFqHjM1GgJ-F0RoDaB5WS8EWhKAP37kU")

export class Contact extends Component {
    state = {
        addrss: "",
        zoom: "15",
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng)
            .then(response => {
                console.log('response', response)
            })
    }

    render() {

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 4.868282602937601, lng: 6.908971168238508 }}
            >
                <Marker
                    draggable={true}
                    onDragEnd={this.onMarkerDragEnd}
                    position={{ lat: 4.868282602937601, lng: 6.908971168238508 }}>
                    <InfoWindow>
                        <div>Omakwa energy Location</div>
                    </InfoWindow>
                </Marker>
            </GoogleMap>
        ));
        return (
            <div>
                <div className='contact-bg'>
                    <div className="page-container otherpages-container">
                        <h1 className="other-page-heading wow fadeInUp">Contact</h1>
                        <div className="other-pages-span wow fadeInUpBig">
                            <NavLink to='/omakwaenergyplc' className="otherpage-navlink">Home </NavLink>  
                            > <span>contact</span>
                        </div>
                    </div>
                </div>
                <div className="container contact-container">
                    <div className="row no-gutters">
                        <div className="col-lg-4 col-md-12 col-sm-12 contact-details">
                            <div className="contact-detailsOne">
                                <div className="contact-details-title">Contact details</div>
                                <p>Get in touch with us for any questions about Omakwa Energy</p>

                                <div className="contact-detail-logoaddress">
                                    <div className="contact-logo"><FaHome className="contact-icons" /></div>
                                    <div className="contact-address-title">
                                        <h3>Office address</h3>
                                        <h6>No 1 Rumualogu- Uniport Road, Rumualogu Port Harcourt Rivers State</h6>
                                    </div>
                                </div>

                                <div className="contact-detail-logoaddress">
                                    <div className="contact-logo"><FaEnvelope className="contact-icons" /></div>
                                    <div className="contact-address-title">
                                        <h3>Email</h3>
                                        <h6><a href="mailto:info@omakwaenergy.com" target="_blank" rel="noopener noreferrer" >info@omakwaenergy.com </a></h6>
                                        <h6><a href="mailto:omakwaenergy@gmail.com" target="_blank" rel="noopener noreferrer">omakwaenergy@gmail.com</a></h6>
                                    </div>
                                </div>
                                <div className="contact-detail-logoaddress">
                                    <div className="contact-logo"><FaPhoneAlt className="contact-icons" /></div>
                                    <div className="contact-address-title">
                                        <h3>Phone</h3>
                                        <h6>+234 708 887 9779 </h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-1 col-md-12 col-sm-12"></div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="contact-form">
                                <h2 className="text-left">Send a message</h2>
                                <Underline />
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <MapWithAMarker className="google-map"
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdFqHjM1GgJ-F0RoDaB5WS8EWhKAP37kU&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        )
    }
}

export default Contact
