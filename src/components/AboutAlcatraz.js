import React from "react";
import { Link } from "./../util/router.js";
import "./HeroSection.scss";

function AboutAlcatraz(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " id="div_341d_0">
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_341d_1" data-sync-height="height-3">
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" id="div_341d_2">
                                        <div className="gdlr-core-title-item-title-wrap">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" id="h3_341d_0">Who We Are?<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" id="div_341d_3">
                                        <div className="gdlr-core-text-box-item-content" id="div_341d_4">
                                            <p>We are in the business for 9 years. We are an authorized seller broker located in Fishermens Warf, San Francisco providing customers from all over the globe Alcatraz ticket combined with an other tour to go visit the historical island and its famous prison. The ticket is sold in a reasonable price.</p>
                                            <p>We do our best to make your visit to San Francisco a good learning experience.</p>
                                            <div style={{marginTop:'50px'}}>
                                                <Link to="/tours" className="default_button">Get Your Tickets</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-30">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_341d_5" >
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                                
                                <div className="gdlr-core-pbf-element text-right">
                                    <img src={require('../upload/about_img2.jpg').default} />
                                    {/* <div className="gdlr-core-skill-bar-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-size-small gdlr-core-type-round">
                                        <div className="gdlr-core-skill-bar">
                                            <div className="gdlr-core-skill-bar-head gdlr-core-title-font"><span className="gdlr-core-skill-bar-title">Branding</span><span className="gdlr-core-skill-bar-right">90%</span></div>
                                            <div className="gdlr-core-skill-bar-progress">
                                                <div className="gdlr-core-skill-bar-filled gdlr-core-js" data-width="90" id="div_341d_6"></div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-skill-bar">
                                            <div className="gdlr-core-skill-bar-head gdlr-core-title-font"><span className="gdlr-core-skill-bar-title">Graphic Design</span><span className="gdlr-core-skill-bar-right">100%</span></div>
                                            <div className="gdlr-core-skill-bar-progress">
                                                <div className="gdlr-core-skill-bar-filled gdlr-core-js" data-width="100" id="div_341d_7"></div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-skill-bar">
                                            <div className="gdlr-core-skill-bar-head gdlr-core-title-font"><span className="gdlr-core-skill-bar-title">Social Marketing</span><span className="gdlr-core-skill-bar-right">85%</span></div>
                                            <div className="gdlr-core-skill-bar-progress">
                                                <div className="gdlr-core-skill-bar-filled gdlr-core-js" data-width="85" id="div_341d_8"></div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-skill-bar">
                                            <div className="gdlr-core-skill-bar-head gdlr-core-title-font"><span className="gdlr-core-skill-bar-title">Product Design</span><span className="gdlr-core-skill-bar-right">90%</span></div>
                                            <div className="gdlr-core-skill-bar-progress">
                                                <div className="gdlr-core-skill-bar-filled gdlr-core-js" data-width="90" id="div_341d_9"></div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js  gdlr-core-column-extend-left" id="div_341d_10" data-sync-height="height-1">
                            <div className="gdlr-core-pbf-background-wrap" id="div_341d_11">
                                <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" id="div_341d_12" data-parallax-speed="0.2"></div>
                            </div>
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content" data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"></div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-30">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js  gdlr-core-column-extend-right" id="div_341d_13" data-sync-height="height-1" data-sync-height-center>
                            <div className="gdlr-core-pbf-background-wrap" id="div_341d_14"></div>
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content" data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" id="div_341d_15">
                                        <div className="gdlr-core-title-item-title-wrap">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" id="h3_341d_1">Pharetra Etiam Inceptos<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" id="div_341d_16">
                                        <div className="gdlr-core-text-box-item-content" id="div_341d_17">
                                            <p>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix ">
                                        <ul>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30 gdlr-core-column-first"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_4"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_5" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_0">Vestibulum id ligula</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_6"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_7" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_1">Mattis Fringilla Ultricies</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30 gdlr-core-column-first"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_8"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_9" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_2">Egestas Fermentum</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_10"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_11" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_3">Adipiscing Vulputate</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30 gdlr-core-column-first"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_12"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_13" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_4">Ultricies Bibendum</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_14"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_15" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_5">Fringilla Quam Elit</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30 gdlr-core-column-first"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_16"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_17" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_6">Fermentum Tellus</span></div>
                                            </li>
                                            <li className=" gdlr-core-skin-divider gdlr-core-with-hover gdlr-core-column-30"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon-hover fa fa-check-circle" id="i_341d_18"  ></i><i className="gdlr-core-icon-list-icon fa fa-check-circle" id="i_341d_19" ></i></span>
                                                <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content" id="span_341d_7">Commodo Vestibulum</span></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js  gdlr-core-column-extend-left" id="div_341d_18" data-sync-height="height-2" data-sync-height-center>
                            <div className="gdlr-core-pbf-background-wrap" id="div_341d_19"></div>
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content" data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" id="div_341d_20">
                                        <div className="gdlr-core-title-item-title-wrap">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" id="h3_341d_2">About Services<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" id="div_341d_21">
                                        <div className="gdlr-core-text-box-item-content" id="div_341d_22">
                                            <p>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                            <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" id="div_341d_23"><a className="gdlr-core-button  gdlr-core-button-solid gdlr-core-button-no-border" href="#" id="a_341d_0"><span className="gdlr-core-content" >Get A Quote</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-30" data-skin="Dark">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js  gdlr-core-column-extend-right" id="div_341d_24" data-sync-height="height-2">
                            <div className="gdlr-core-pbf-background-wrap" id="div_341d_25"></div>
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content" data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr">
                                        <div className="gdlr-core-column-service-media gdlr-core-media-image" id="div_341d_26"><img src="upload/icon-1.png" alt="" width="49" height="49" /></div>
                                        <div className="gdlr-core-column-service-content-wrapper">
                                            <div className="gdlr-core-column-service-title-wrap">
                                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" id="h3_341d_3">Ornare Quam Justo Tellusv</h3></div>
                                            <div className="gdlr-core-column-service-content" id="div_341d_27">
                                                <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr">
                                        <div className="gdlr-core-column-service-media gdlr-core-media-image" id="div_341d_28"><img src="upload/icon-2.png" alt="" width="41" height="49" /></div>
                                        <div className="gdlr-core-column-service-content-wrapper">
                                            <div className="gdlr-core-column-service-title-wrap">
                                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" id="h3_341d_4">Pellentesque Magna Venenatis</h3></div>
                                            <div className="gdlr-core-column-service-content" id="div_341d_29">
                                                <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr" id="div_341d_30">
                                        <div className="gdlr-core-column-service-media gdlr-core-media-image" id="div_341d_31"><img src="upload/icon-3.png" alt="" width="30" height="39" /></div>
                                        <div className="gdlr-core-column-service-content-wrapper">
                                            <div className="gdlr-core-column-service-title-wrap">
                                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" id="h3_341d_5">Magna Nibh Commodo</h3></div>
                                            <div className="gdlr-core-column-service-content" id="div_341d_32">
                                                <p>Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutAlcatraz;
