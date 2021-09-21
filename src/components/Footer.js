import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import StickyCTAButton from "../components/StickyCTAButton";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <footer>
                <div className="traveltour-footer-wrapper ">
                    <div className="traveltour-footer-container traveltour-container clearfix">
                        <div className="traveltour-footer-column traveltour-item-pdlr traveltour-column-15">
                            <img src={require('../upload/alcatraz-white.png').default} width="70%"/>
                        </div>
                        <div className="traveltour-footer-column traveltour-item-pdlr traveltour-column-15">
                            <div id="gdlr-core-custom-menu-widget-2" className="widget widget_gdlr-core-custom-menu-widget traveltour-widget">
                                <h3 className="traveltour-widget-title"><span className="traveltour-widget-head-text">Packages</span></h3><span className="clear"></span>
                                <div className="menu-about-us-container">
                                    <ul id="menu-about-us" className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                                        <li className="menu-item"><Link to="/tour/open-bus-city-tour-1">Alcatraz ticket and Open Top Bus City Tour (1 day)</Link></li>
                                        {/* <li className="menu-item"><Link to="/tour/open-bus-city-tour-2">Alcatraz ticket and Open Top Bus City Tour (2 days)</Link></li> */}
                                        <li className="menu-item"><Link to="/tour/one-hour-bay-cruise">Alcatraz ticket and 1 Hour Bay Cruise</Link></li>
                                        <li className="menu-item"><Link to="/tour/all-day-bike-tour">Alcatraz ticket and All Day Bike Tour</Link></li>
                                        <li className="menu-item"><Link to="/tour/muir-woods">Alcatraz ticket and Muir Wood National Park</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="traveltour-footer-column traveltour-item-pdlr traveltour-column-15">
                            <div id="gdlr-core-custom-menu-widget-3" className="widget widget_gdlr-core-custom-menu-widget traveltour-widget">
                                <h3 className="traveltour-widget-title"><span className="traveltour-widget-head-text">Quick Links</span></h3><span className="clear"></span>
                                <div className="menu-support-container">
                                    <ul id="menu-support" className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                                        <li className="menu-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/tours">All Tours</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://g.page/r/CdrJev3JMDfvEAg/review" target="_blank">Write a Review</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="traveltour-footer-column traveltour-item-pdlr traveltour-column-15">
                          <div id="text-1" className="widget widget_text traveltour-widget">
                                <div className="textwidget">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top" style={{paddingBottom:'5px'}} >
                                        <div className="gdlr-core-title-item-title-wrap ">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize:'17px', textTransform:'none', color:'#48dbfb'}}>Call Us<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                    <a href="tel:4152837321"><i className="icon_phone" style={{fontSize:'17px', marginRight:'8px', color:'#ffffff'}} ></i> <span style={{fontSize:'16px', color:'#fff'}} >(415) 283 7321</span></a>
                                    <span className="gdlr-core-space-shortcode" style={{marginTop:'22px'}}></span>
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top" style={{paddingBottom:'5px'}}>
                                        <div className="gdlr-core-title-item-title-wrap ">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize:'17px', textTransform:'none', color:'#48dbfb'}} >Email<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div> 
                                    <a href="mailto:alcatraztourstickets@gmail.com"><span style={{fontSize:'16px', color:'#fff'}}>alcatraztourstickets@gmail.com</span></a>

                                    <span className="gdlr-core-space-shortcode" style={{marginTop:'22px'}}></span>
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top" style={{paddingBottom:'5px'}}>
                                        <div className="gdlr-core-title-item-title-wrap ">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize:'17px', textTransform:'none', color:'#48dbfb'}} >Place to Pick up Tickets<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div> 
                                    <a href="https://goo.gl/maps/spphhQzkoxChCCT17"><span style={{fontSize:'16px', color:'#fff'}}>2840 Jones Street, <br/>San Francisco 94133</span></a>
                                </div>
                                    
                            </div>
                        </div>
                    </div>

                    

                    <div className="traveltour-footer-container traveltour-container clearfix">
                        <div className="traveltour-footer-column traveltour-item-pdlr traveltour-column-60">
                            <div className="footer_note">
                                <h6>Note:</h6>
                                <p>Alcatraz departs from Pier 33 and your ticket is time-sensitive, meaning you can not change the date. However, the bus ticket, bay cruise, or Muir Wood can be done before or after the Alcatraz or the same day after the Alcatraz, if you are in San Francisco for more than one day we recommend you to split the activities.</p>
                                <p className="mb-0">Only Alcatraz is sold as a combo, for the other tours, you can add it to your combo. For example, if you bought Alcatraz with a Bus Tour and you want to add Muir Wood or a Bay Cruise we can do that.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="traveltour-copyright-wrapper ">
                    <div className="traveltour-copyright-container traveltour-container clearfix">
                        <div className="traveltour-copyright-left traveltour-item-pdlr">© 2021 Alcatraz Tours & Tickets. All Rights Reserved.</div>
                        <div className="traveltour-copyright-right traveltour-item-pdlr">This website is running on serverless technology. Managed by <a target="_blank" href="https://embtelsolutions.com/?utm_source=footer&utm_medium=website&utm_campaign=alcatraz">Embtel Solutions</a></div>
                    </div>
                </div>
                {/* <StickyCTAButton /> */}
            </footer>
    // <Section
    //   bg={props.bg}
    //   textColor={props.textColor}
    //   size={props.size}
    //   bgImage={props.bgImage}
    //   bgImageOpacity={props.bgImageOpacity}
    //   className="footer"
    // >
    //   <Container>
    //     <div className="FooterComponent__inner">
    //       <div className="brand left">
    //         <Link to="/">
    //           <img src={props.logo} alt="Logo" />
    //         </Link>
    //       </div>
    //       <div className="links right">
    //         <Link to="/about">About</Link>
    //         <Link to="/faq">FAQ</Link>
    //         <Link to="/contact">Contact</Link>
    //         <a
    //           target="_blank"
    //           href="https://medium.com"
    //           rel="noopener noreferrer"
    //         >
    //           Blog
    //         </a>
    //       </div>
    //       <div className="social right">
    //         <a
    //           href="https://twitter.com/divjoy"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <span className="icon">
    //             <i className="fab fa-twitter" />
    //           </span>
    //         </a>
    //         <a
    //           href="https://facebook.com/DivjoyOfficial"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <span className="icon">
    //             <i className="fab fa-facebook-f" />
    //           </span>
    //         </a>
    //         <a
    //           href="https://instagram.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <span className="icon">
    //             <i className="fab fa-instagram" />
    //           </span>
    //         </a>
    //       </div>
    //       <div className="copyright left">{props.copyright}</div>
    //     </div>
    //   </Container>
    // </Section>
  );
}

export default Footer;
