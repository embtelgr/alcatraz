import React, { useState } from "react";
import FormAlert from "./FormAlert";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import contact from "../util/bookticket.js";
import { useForm } from "react-hook-form";
// import ReCAPTCHA from "react-google-recaptcha";

function FormTickets(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const [myname, setMyName] = useState('');
  const [myemail, setMyEmail] = useState('');
  const [myphone, setMyPhone] = useState('');
  const [message, setMessage] = useState('');
  const [mytour, setMyTour] = useState('');
  const [mypersons, setMyPersons] = useState('');
  const [mytime, setMyTime] = useState('');

 
  const handleChangeDate = (selectedDate) => {
    
    console.log(selectedDate)
  };

  const resetForm = () => {
    setMyName('');
    setMyEmail('');
    setMyPhone('');
    setMessage('');
    
    
  };

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);
    console.log(myname, myemail, myphone, mytour, mypersons, message)
    //  contact
    //    .submit({
    //       'name':myname, 
    //       'email':myemail,
    //       'phone':myphone, 
    //       'tour':mytour, 
    //       'persons':mypersons,
    //       'message':message
    //     })  
    //    .then(() => {
    //      // Clear form
    //     //  reset();
    //     resetForm();
         
    //      // Show success alert message
    //      setFormAlert({
    //        type: "success",
    //        message: "Thank you for booking with us! We have received your request. You will get a call soon from our representative.",
    //      });
    //    })
    //    .catch((error) => {
    //      // Show error alert message
    //      setFormAlert({
    //        type: "error",
    //        message: error.message,
    //      });
    //    })
    //    .finally(() => {
    //      // Hide pending indicator
    //      setPending(false);
    //    });
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <Form id="requestform" clas="quform" onSubmit={handleSubmit(onSubmit)}>
          <div className="quform-elements">
              <div className="quform-element">
                  <p>
                      <br/>
                      <label style={{fontWeight:'bold'}}>Your Name *</label>
                      <span className="wpcf7-form-control-wrap your-name">
                          <input style={{marginTop:'10px'}} id="name" required type="text" onChange={(e) => setMyName(e.target.value)} name="name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name (required)" />
                      </span> 
                  </p>
              </div>
              <div className="d-flex">
                  <div className="quform-element mr-10">
                      <p>
                          <br/>
                          <label style={{fontWeight:'bold'}}>Your Email Address *</label>
                          <span className="wpcf7-form-control-wrap your-email">
                              <input style={{marginTop:'10px'}} id="email" required type="text" name="email" onChange={(e) => setMyEmail(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email" />
                          </span> 
                      </p>
                  </div>
                  <div className="quform-element ml-10">
                      <p>
                          <br/>
                          <label style={{fontWeight:'bold'}}>Your Phone Number *</label>
                          <span className="wpcf7-form-control-wrap your-phone">
                              <input style={{marginTop:'10px'}} id="phone" required type="text" name="phone" onChange={(e) => setMyPhone(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Phone Number" />
                          </span> 
                      </p>
                  </div>
              </div>
              
              <div className="d-flex">
                  <div className="quform-element mr-10">
                      <p>
                          <br/>
                          <label style={{fontWeight:'bold'}}>Select the Tour *</label>
                          <select className="form-select" aria-label="Select the Tour" required onChange={(e) => setMyTour(e.target.value)}>
                              <option selected>Select the Tour</option>
                              <option value="Alcatraz and An Open Top Bus City Tour 1 Day">Alcatraz and An Open Top Bus City Tour 1 Day</option>
                              <option value="Alcatraz and An Open Top Bus City Tour 2 Days">Alcatraz and An Open Top Bus City Tour Two Days</option>
                              <option value="Alcatraz and 1 Hour Bay Cruise">Alcatraz and 1 Hour Bay Cruise</option>
                              <option value="Alcatraz and All Day Bike Tour">Alcatraz and All Day Bike Tour</option>
                          </select>
                      </p>
                  </div>

                  <div className="quform-element ml-10">
                      <p>
                          <br/>
                          <label style={{fontWeight:'bold'}}>How Many Persons You Are? *</label>
                          <select className="form-select" aria-label="Number of Persons" required  onChange={(e) => setMyPersons(e.target.value)}>
                              <option selected>Number of Persons</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="5+">5+</option>
                          </select>
                      </p>
                  </div>
              </div>
              <div className="quform-element">
                  <p>
                      <br/>
                      <label style={{fontWeight:'bold'}}>Your Message</label>
                      <span className="wpcf7-form-control-wrap your-message">
                          <textarea style={{marginTop:'10px'}} id="message" onChange={(e) => setMessage(e.target.value)} name="message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message"></textarea>
                      </span>
                  </p>
              </div>
              <p>
                  
                  <div className="quform-submit">
                      <div className="quform-submit-inner">
                        <Button
                            type="submit"
                            className="default_button"
                            disabled={pending}
                          >
                            {!pending && (
                              <span>Submit Now</span>
                            )}
                            {pending && (
                              <Spinner
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden={true}
                                className="ml-2"
                              >
                                <span className="sr-only">Sending...</span>
                              </Spinner>
                            )}
                          </Button>
                          {/* <button type="submit" className="submit-button default_button"><span>Submit Now</span></button> */}
                      </div>
                      <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                  </div>
              </p>
          </div>
          
            
      </Form>
    </>
  );
}

export default FormTickets;
