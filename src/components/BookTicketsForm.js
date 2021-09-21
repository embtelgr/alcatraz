import React from "react";
import FormTickets from "../components/FormTickets"
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import "./HeroSection.scss";

function ContactFormSection(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " style={{padding:'95px 0px 90px 0px'}} data-skin="Grey">
            <div className="gdlr-core-pbf-background-wrap" ></div>
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " style={{maxWidth:'760px'}} >
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr">
                                        <div className="gdlr-core-title-item-title-wrap">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'32px', letterSpacing:'0px', textTransform:'none'}} >Fill the details in the form below <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div><span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'19px', fontStyle:'normal'}} >and we will get back to you ASAP.</span></div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'50px'}} >
                                        <div className="gdlr-core-divider-container" style={{maxWidth:'40px'}} >
                                            <div className="gdlr-core-divider-line gdlr-core-skin-divider" style={{borderColor:'#2b2b2b', borderBottomWidth:'2px'}} ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element book_tickets_form">
                                    <div className="gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb ">
                                        <div role="form" className="wpcf7" id="wpcf7-f1319-p1964-o1" lang="en-US" dir="ltr">
                                            <div className="screen-reader-response"></div>
                                            <FormTickets />
                                            {/* <form className="quform" action="" method="post" enctype="multipart/form-data" onclick="">

                                                <div className="quform-elements">
                                                    <div className="quform-element">
                                                        <p>
                                                            <br/>
                                                            <label style={{fontWeight:'bold'}}>Your Name</label>
                                                            <span className="wpcf7-form-control-wrap your-name">
                                                                <input style={{marginTop:'10px'}} id="name" type="text" name="name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name (required)" />
                                                            </span> 
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="quform-element mr-10">
                                                            <p>
                                                                <br/>
                                                                <label style={{fontWeight:'bold'}}>Your Email Address</label>
                                                                <span className="wpcf7-form-control-wrap your-email">
                                                                    <input style={{marginTop:'10px'}} id="email" type="text" name="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email (required)" />
                                                                </span> 
                                                            </p>
                                                        </div>
                                                        <div className="quform-element ml-10">
                                                            <p>
                                                                <br/>
                                                                <label style={{fontWeight:'bold'}}>Your Phone Number</label>
                                                                <span className="wpcf7-form-control-wrap your-phone">
                                                                    <input style={{marginTop:'10px'}} id="phone" type="text" name="phone" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Phone Number (required)" />
                                                                </span> 
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex">
                                                        <div className="quform-element mr-10">
                                                            <p>
                                                                <br/>
                                                                <label style={{fontWeight:'bold'}}>Select the Tour</label>
                                                                <select className="form-select" aria-label="Select the Tour">
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
                                                                <label style={{fontWeight:'bold'}}>How Many Persons You Are?</label>
                                                                <select className="form-select" aria-label="Number of Persons">
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
                                                                <textarea style={{marginTop:'10px'}} id="message" name="message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message"></textarea>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <p>
                                                        
                                                        <div className="quform-submit">
                                                            <div className="quform-submit-inner">
                                                                <button type="submit" className="submit-button default_button"><span>Submit Now</span></button>
                                                            </div>
                                                            <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                                                        </div>
                                                    </p>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactFormSection;
