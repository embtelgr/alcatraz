import React from "react";

import "./HeroSection.scss";

function TicketCollection(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " id="div_341d_0">
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_341d_5" >
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                                
                                <div className="gdlr-core-pbf-element text-right">
                                    <img src={require('../upload/ticket_point.jpg').default} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-30 about_ticket">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_341d_1" data-sync-height="height-3">
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" id="div_341d_2">
                                        <div className="gdlr-core-title-item-title-wrap">
                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" id="h3_341d_0">Important Notice<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                </div>
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" id="div_341d_3">
                                        <div className="gdlr-core-text-box-item-content" id="div_341d_4">
                                            <p style={{color:'#232323'}}><strong>When and where you can pick up your Alcatraz ticket?</strong></p>
											{/* <p>You need to come to pick up your Alcatraz from our tickets booth located at San Francisco.</p>
                                            <p>Other attractions' tickets such as bus or bay cruise, bike should be picked up from the same location.</p>
                                            <p>Call us now for more information.</p>
                                            <div style={{marginTop:'50px'}}>
                                                <a href="tel:4152837321" className="default_button">(415) 283 7321</a>
                                            </div> */}
											<p>You need to come to our ticket booth located at Fishermens Warf in San Francisco .to pick up all your tickets, including Alcatraz ticket, bay cruise, bus ticket.</p>
											<p>Call us if you need directions.</p>
                                            <div style={{marginTop:'50px'}}>
                                                <a href="tel:4152837321" className="default_button">(415) 283 7321</a>
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
    </div>
  );
}

export default TicketCollection;
