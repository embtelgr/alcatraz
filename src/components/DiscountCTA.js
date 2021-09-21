import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import "./HeroSection.scss";

function DiscountCTA(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " style={{marginLeft:'auto', marginRight:'auto', padding:'0px 0px 35px 0px', maxWidth:'1220px'}} data-skin="White Text">
            <div className="gdlr-core-pbf-background-wrap"></div>
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{padding: '58px 0px 44px 0px'}} data-sync-height="sh1">
                            <div className="gdlr-core-pbf-background-wrap" style={{backgroundColor:'#f97251', borderRadius: '3px 0px 0px 3px', background:'linear-gradient(rgb(11 102 153), rgb(11 102 153 / 65%))'}} ></div>
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"><span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'20px', fontWeight:'700', fontStyle:'normal', color:'#fed7c8'}}>Enjoy Season Deals</span>
                                        <div className="gdlr-core-title-item-title-wrap">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'31px', fontWeight:'700', letterSpacing:'0px', textTransform:'none'}} >Call us Now to Reserve<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align"><a className="gdlr-core-button  gdlr-core-button-gradient gdlr-core-button-no-border" href="#" style={{fontSize:'12px', fontWeight:'600', letterSpacing:'1px', padding:'9px 24px 11px 24px', textTransform:'uppercase', borderRadius:'3px', background:'#1e354c'}} ><span className="gdlr-core-content" >Call Us Now</span></a></div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-image-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-center-align" style={{paddingBottom:'10px'}} >
                                        <div className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle" style={{borderWidth:'0px'}} >
                                            <img src={require('../upload/alcatraz-white.png').default} alt="" width="100" title="tvicon4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space" style={{paddingBottom:'0px'}} >
                                        <div className="gdlr-core-text-box-item-content" style={{fontSize:'11px', textTransform:'none'}} >
                                            <p>*Terms applied</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-30">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{padding:'60px 0px 40px 0px', height:'340px'}} data-sync-height="sh1" data-sync-height-center>
                            <div className="gdlr-core-pbf-background-wrap" style={{borderRadius:'0px 3px 3px 0px'}} >
                                <div className="cta_background gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundSize:'cover', backgroundPosition:'center'}} data-parallax-speed="0"></div>
                            </div>
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DiscountCTA;
