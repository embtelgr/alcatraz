import React from "react";
import { Link } from "./../util/router.js";
import "./HeroSection.scss";

function PopupVideo(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " style={{padding:'190px 0px 160px 0px'}} >
            <div className="gdlr-core-pbf-background-wrap">
                <div className="video_bg gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundSize:'cover', backgroundPosition:'bottom center'}} data-parallax-speed="0.2"></div>
            </div>
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'25px'}} >
                            <div className="gdlr-core-title-item-title-wrap">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'55px', fontWeight:'700', letterSpacing:'0px', textTransform:'none', color:'#ffffff'}} >Alcatraz Highlights<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'34px'}}>
                            <div className="gdlr-core-title-item-title-wrap">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'23px', letterSpacing:'0px', textTransform:'none', color:'#48dbfb'}} >Get your family and freinds ready.<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                        </div>
                    </div>
                    {/* <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-image-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-center-align" style={{paddingBottom:'0px'}} >
                            <div className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle" style={{borderWidth:'0px'}} >
                                <a className="gdlr-core-lightgallery gdlr-core-js " href="https://www.youtube.com/watch?v=ztjxxPYlg9E"><img src={require('../upload/tvicon5.png').default} alt="" width="71" height="71" title="tvicon5" /></a>
                            </div>
                        </div>
                    </div> */}
					<div className="text-center">
						<Link to="/tours" className="gdlr-core-button" style={{background:'#ffffff', color:'#1e354c'}}>Book Your Tickets</Link>
					</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PopupVideo;
