import React from "react";

import "./HeroSection.scss";

function ContactMap(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " style={{padding:'0px 0px 0px 0px'}} >
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-wp-google-map-plugin-item gdlr-core-item-pdlr gdlr-core-item-pdb " style={{paddingBottom:'0px'}} >
                            <div className="wpgmp_map_container wpgmp-map-1" rel="map1">
                                {/* <div className="wpgmp_map " style={{width:'100%', height:'450px'}} id="map1"></div> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.241712592765!2d-122.41948788468139!3d37.80780697975349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e3c13f188f%3A0x4dba0c2fb94d4de2!2s2840%20Jones%20St%2C%20San%20Francisco%2C%20CA%2094133%2C%20USA!5e0!3m2!1sen!2sin!4v1622790913664!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactMap;
