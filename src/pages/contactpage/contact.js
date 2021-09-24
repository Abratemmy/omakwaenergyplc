import React, { Component } from 'react';
import {FaEnvelope, FaHome, FaPhoneAlt} from 'react-icons/fa';
import './contact.css'
import Underline from '../../components/textunderline/textunderline';
import Otherpages from '../../components/otherpages/otherpages';
import emailjs from 'emailjs-com/';
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps"; 
import Geocode, { setApiKey } from "react-geocode";

Geocode.setApiKey("AIzaSyBdFqHjM1GgJ-F0RoDaB5WS8EWhKAP37kU")


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname:"",
             lastname:"",
             email:"",
             message:"",
             errors:{
                 email:'',
                 message:''
             }
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event) =>{
        this.setState({
            firstname:event.target.value
        })
    }
    secondhandler=(event) =>{
        this.setState({
            lastname:event.target.value
        })
    }
    emailhandler=(event) =>{
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'email': 
              errors.email = 
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
            default:
              break;
          }
        this.setState({
            email:event.target.value,
            errors
        })
    }
    messagehandler=(event) =>{
        this.setState({
            message:event.target.value
        })
    }
    
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
    handleSubmit=(e) =>{
        if(this.emailhandler===true){
            alert(`hi ${this.state.firstname} ${this.state.lastname}, Thank you for contacting us, we will get back to you`)
            this.setState({
                firstname:"",
                lastname:"",
                email:"",
                message:""
            })
            e.preventDefault();        
        }
        else{
            alert("Your email is required !!!")
        }
        this.sendEmail(e);
    }
    sendEmail(e){
        emailjs.sendForm(
            'service_iuv3umm',
            'template_jl8r50m',
            e.target,
            "user_J0GFEOTNEUpdJde9zQve9"
        ).then(res=>{
            console.log(res)

        }).catch(err=>console.log(err))
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
                                <form className="contactform" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 contact-form-div">
                                            <input type="text" rules="required|max:255" name="firstname"placeholder="First Name"value={this.state.firstname} onChange={this.firsthandler}  className="inputfield"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12  contact-form-div">
                                            <input type="text" rules="required|max:255" name="lastname"placeholder="Last Name" value={this.state.lastname} onChange={this.secondhandler} className="inputfield"/>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12  contact-form-div">
                                            <input type="email" rules="required|max:255" name="email"placeholder="Email"value={this.state.email} onChange={this.emailhandler}  className="inputfield"noValidate/>
                                            {this.state.errors.email.length > 0 && 
                                             <span className='error'style={{color:"red"}}>{this.state.errors.email}</span>}
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" id="" cols="30" rows="5" placeholder="Message" className="textarea"rules="required|max:255" value={this.state.message} onChange={this.messagehandler}></textarea>
                                        </div>
                                        <div className="col-lg-4 contact-submit-btn">
                                            <button type="submit" className="signUpButton"value="Submit" style={{marginTop:'30px', border:'none'}}>Submit</button>
                                        </div>
                                        
                                    </div>
                                </form>
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
