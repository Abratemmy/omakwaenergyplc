import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import emailjs from "emailjs-com";

function Form() {
  const history = useHistory();
	const [values, setValues] = useState({
		firstname: "",
    lastname:"",
    message:"",
		email:""
	});
	const [errors, setErrors] = useState({});

	// get input values
	const handleChange = (ev) => {
		setValues({
			...values,
			[ev.target.name]: ev.target.value,
		});
	};

	// handle errors
	const handleError = (targets) => {
		let errorsValue = {};
		if (!targets.firstname) errorsValue.firstname = "First name is required";
    if (!targets.lastname) errorsValue.lastname = "Last name is required";
    if (!targets.message) errorsValue.message = "Type  a required";
    if (!targets.email) errorsValue.email = "Email  is required";
    else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
		
		if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
		else setErrors({});

		return Object.keys(errorsValue).length;

	};

	// submit form
	const submitForm = async (ev) => {
		ev.preventDefault();
		let v = handleError(values);

		// check if there is any eror available and handle here 
		if (v > 0) console.log("error");
		//submit form here if no error availble
		else {
            sendEmail(ev);
            history.push('/success_page');
            console.log("submitted");
        }
	};
    function sendEmail(ev){
        emailjs.sendForm(
          'service_iuv3umm',
          'template_jl8r50m',
          ev.target,
          "user_J0GFEOTNEUpdJde9zQve9"
      ).then(res=>{
          console.log(res)

      }).catch(err=>console.log(err))
    }

	return (
		<div>         
        <form className="contactform" onSubmit={submitForm}>
          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 contact-form-div">
                  <input type="text" name="firstname"placeholder="First Name" onChange={handleChange}  className="inputfield"/>
                  {errors ? <p> {errors.firstname }</p>: ""}
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12  contact-form-div">
                  <input type="text" name="lastname"placeholder="Last Name" onChange={handleChange} className="inputfield"/>
                  {errors ? <p> {errors.lastname }</p>: ""}
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12  contact-form-div">
                  <input type="email"  name="email"placeholder="Email" onChange={handleChange}  className="inputfield"noValidate/>
                  {errors ? <p> {errors.email }</p>: ""}
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                  <textarea name="message" id="" cols="30" rows="5" placeholder="Message" className="textarea"onChange={handleChange}></textarea>
                  {errors ? <p> {errors.message }</p>: ""}
              </div>

              <div className="col-lg-4 contact-submit-btn">
                  <input type="submit" className="signUpButton" value="Submit" style={{marginTop:'30px', border:'none'}} />
                  
              </div>
                  
              </div>
          </form> 
		</div>
	);  
}
export default Form

