import React from "react";

import "./HeroSection.scss";

function AboutHero(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " style={{padding:'100px 0px 70px 0px'}} data-skin="Dark">
            <div className="gdlr-core-pbf-background-wrap">
                <div className="about_page_bg gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundSize:'cover', backgroundPosition:'top'}} data-parallax-speed="0.3"></div>
            </div>
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr">
                            <div className="gdlr-core-title-item-title-wrap">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'50px', letterSpacing:'0px', textTransform:'none'}}>About Us<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div><span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'25px', marginTop:'25px'}}>More About Alcatraz Tours & Tickets</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutHero;
