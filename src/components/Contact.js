import React, { useState } from "react";
import FormAlert from "./FormAlert";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import contact from "./../util/contact.js";
import { useForm } from "react-hook-form";
// import ReCAPTCHA from "react-google-recaptcha";

function Contact(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const [myname, setMyName] = useState('');
  const [agentname, setAgentName] = useState('');
  const [myemail, setMyEmail] = useState('');
  const [myphone, setMyPhone] = useState('');
  const [message, setMessage] = useState('');
  const [myservice, setMyService] = useState('');
  const [mydate, setMyDate] = useState('');
  const [mytime, setMyTime] = useState('');

 
  const handleChangeDate = (selectedDate) => {
    
    console.log(selectedDate)
  };

  const resetForm = () => {
    setMyName('');
    setMyEmail('');
    setMyPhone('');
    setMessage('');
    setAgentName('');
    
  };

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);
    
     contact
       .submit({
          'name':myname, 
          'email':myemail,
          'phone':myphone, 
          'message':message,
          'agent':agentname,
        })  
       .then(() => {
         // Clear form
        //  reset();
        resetForm();
         
         // Show success alert message
         setFormAlert({
           type: "success",
           message: "Thank you! Your message has been sent. We will get back to you ASAP.",
         });
       })
       .catch((error) => {
         // Show error alert message
         setFormAlert({
           type: "error",
           message: error.message,
         });
       })
       .finally(() => {
         // Hide pending indicator
         setPending(false);
       });
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
                        <span className="wpcf7-form-control-wrap your-name">
                            <input id="name" required type="text" name="name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" onChange={(e) => setMyName(e.target.value)} aria-invalid="false" placeholder="Full Name (required)" />
                        </span> 
                    </p>
                </div>
                <div className="quform-element">
                    <p>
                        <br/>
                        <span className="wpcf7-form-control-wrap your-email">
                            <input id="email" required type="text" name="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" onChange={(e) => setMyEmail(e.target.value)} aria-required="true" aria-invalid="false" placeholder="Your Email (required)" />
                        </span> 
                    </p>
                </div>
                <div className="quform-element">
                    <p>
                        <br/>
                        <span className="wpcf7-form-control-wrap your-email">
                            <input id="phone" required type="text" name="phone" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required" onChange={(e) => setMyPhone(e.target.value)} aria-required="true" aria-invalid="false" placeholder="Your Phone (required)" />
                        </span> 
                    </p>
                </div>
                <div className="quform-element">
                    <p>
                        <br/>
                        <span className="wpcf7-form-control-wrap your-name">
                            <input id="agentname" type="text" name="agentname" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" onChange={(e) => setAgentName(e.target.value)} aria-invalid="false" placeholder="Agent Referral Name" />
                        </span> 
                    </p>
                </div>
                <div className="quform-element">
                    <p>
                        <br/>
                        <span className="wpcf7-form-control-wrap your-message">
                            <textarea  id="message" name="message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" onChange={(e) => setMessage(e.target.value)} aria-invalid="false" placeholder="Your Message"></textarea>
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
                            {/* <button type="submit" className="submit-button"><span>Submit Now</span></button> */}
                        </div>
                        {/* <div className="quform-loading-wrap"><span className="quform-loading"></span></div> */}
                    </div>
                </p>
            </div>
            
      </Form>
    </>
  );
}

export default Contact;
