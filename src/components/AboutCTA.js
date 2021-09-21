import React from "react";
import { Link } from "./../util/router.js";
import "./HeroSection.scss";

function AboutCTA(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " id="div_b01f_31" data-skin="Dark" style={{marginTop:'50px'}}>
                        <div className="gdlr-core-pbf-background-wrap" id="div_b01f_32">
                            <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js about_cta_bg" id="div_b01f_33" data-parallax-speed="0.2"></div>
                        </div>
                        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js " >
                            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first" data-skin="About Counter">
                                    <h3>Visit the Historic Island</h3>
                                    <p style={{fontSize:'18px', lineHeight:'1.7'}}>Explore the legendary island that has been a civil war fort, a military prison and one of the most notorious federal penitentiaries.</p>
                                    <div style={{marginTop:'50px'}}>
                                        <Link to="/book-your-tickets" className="default_button">Book Your Tickets Now</Link>
                                    </div>
                                </div>
                                {/* <div className="gdlr-core-pbf-column gdlr-core-column-15 gdlr-core-column-first" data-skin="About Counter">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_b01f_34">
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-counter-item gdlr-core-item-pdlr gdlr-core-item-pdb " id="div_b01f_35">
                                                    <div className="gdlr-core-counter-item-number gdlr-core-skin-title gdlr-core-title-font" id="div_b01f_36"><span className="gdlr-core-counter-item-count gdlr-core-js" data-duration="4000" data-counter-start="0" data-counter-end="20000">0</span><span className="gdlr-core-counter-item-suffix">+</span></div>
                                                    <div className="gdlr-core-counter-item-bottom-text gdlr-core-skin-content" id="div_b01f_37">Customers</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-15" data-skin="About Counter">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_b01f_38">
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-counter-item gdlr-core-item-pdlr gdlr-core-item-pdb " id="div_b01f_39">
                                                    <div className="gdlr-core-counter-item-number gdlr-core-skin-title gdlr-core-title-font" id="div_b01f_40"><span className="gdlr-core-counter-item-count gdlr-core-js" data-duration="4000" data-counter-start="0" data-counter-end="1400">0</span></div>
                                                    <div className="gdlr-core-counter-item-bottom-text gdlr-core-skin-content" id="div_b01f_41">Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-15" data-skin="About Counter">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_b01f_42">
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-counter-item gdlr-core-item-pdlr gdlr-core-item-pdb " id="div_b01f_43">
                                                    <div className="gdlr-core-counter-item-number gdlr-core-skin-title gdlr-core-title-font" id="div_b01f_44"><span className="gdlr-core-counter-item-count gdlr-core-js" data-duration="4000" data-counter-start="0" data-counter-end="16800">0</span></div>
                                                    <div className="gdlr-core-counter-item-bottom-text gdlr-core-skin-content" id="div_b01f_45">Working Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-15" data-skin="About Counter">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_b01f_46">
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-counter-item gdlr-core-item-pdlr gdlr-core-item-pdb " id="div_b01f_47">
                                                    <div className="gdlr-core-counter-item-number gdlr-core-skin-title gdlr-core-title-font" id="div_b01f_48"><span className="gdlr-core-counter-item-count gdlr-core-js" data-duration="4000" data-counter-start="0" data-counter-end="17000">0</span></div>
                                                    <div className="gdlr-core-counter-item-bottom-text gdlr-core-skin-content" id="div_b01f_49">SKUs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
    </div>
  );
}

export default AboutCTA;
