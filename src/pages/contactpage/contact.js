import React, { Component } from 'react';
import {FaEnvelope, FaHome, FaPhoneAlt} from 'react-icons/fa';
import './contact.css'
import Underline from '../../components/textunderline/textunderline';
import Otherpages from '../../components/otherpages/otherpages';
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
    state={
        addrss:"",
        zoom:"15",
        mapPosition:{
            lat:0,
            lng:0,
        },
        markerPosition:{
            lat:0,
            lng:0,
        }
    }

    onMarkerDragEnd = (event) =>{
        let newLat = event.latlng.lat();
        let newlng = event.latlng.lng();

        Geocode.fromLatLng(newLat, newlng)
        .then(response => {
            console.log('response', response)
        })
    }
   
    render() {
      
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={10}
              defaultCenter={{ lat: 6.451549, lng: 3.429530 }}
            >
              <Marker
                draggable = {true}
                onDragEnd = {this.onMarkerDragEnd}
                    position={{ lat: 6.451549, lng: 3.429530 }}>
                  <InfoWindow>
                      <div>Omakwa energy Location</div>
                  </InfoWindow>
              </Marker>
            </GoogleMap>
          ));
        return (
            <div>
                {/* <Otherpages title="Contact" pagetitle="contact"/> */}
                <Otherpages title="Contact us" pagetitle="contact" />
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
                                        <h6>No 10 Wiche Lane, 1 off Uniport Road Ndudor Choba Port Harcourt</h6>
                                    </div>
                                </div>

                                <div className="contact-detail-logoaddress">
                                    <div className="contact-logo"><FaEnvelope className="contact-icons"/></div>
                                    <div className="contact-address-title">
                                        <h3>Email</h3>
                                        <h6>info@omakwaenergy.com , ceo@omakwaenergy.com</h6>
                                    </div>
                                </div>
                                <div className="contact-detail-logoaddress">
                                    <div className="contact-logo"><FaPhoneAlt className="contact-icons"/></div>
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
