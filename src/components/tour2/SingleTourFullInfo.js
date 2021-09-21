import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleTourFullInfo(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div>
        <div className="gdlr-core-page-builder-body">
            <div className="gdlr-core-pbf-wrapper " style={{padding:'0px 0px 0px 0px'}} >
                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                    <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full">
                        <div className="gdlr-core-pbf-element">
                            <div className="tourmaster-content-navigation-item-wrap clearfix" style={{paddingBottom:'0px'}} >
                                <div className="tourmaster-content-navigation-item-outer" id="tourmaster-content-navigation-item-outer">
                                    <div className="tourmaster-content-navigation-item-container tourmaster-container">
                                        <div className="tourmaster-content-navigation-item tourmaster-item-pdlr">
                                            <a className="tourmaster-content-navigation-tab tourmaster-active" href="#summary">Summary</a>
                                            <a className="tourmaster-content-navigation-tab " href="#description">Description</a>
                                            <a className="tourmaster-content-navigation-tab " href="#cancellation">Cancellation Policy</a>
                                            <a className="tourmaster-content-navigation-tab " href="#photos">Photos</a>
                                            {/* <a className="tourmaster-content-navigation-tab " href="#tourmaster-single-review">Reviews</a> */}
                                            <div className="tourmaster-content-navigation-slider"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gdlr-core-pbf-wrapper " style={{padding:'70px 0px 30px 0px'}} data-skin="Blue Icon" id="summary">
                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                    <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom:'35px'}} >
                                <div className="gdlr-core-title-item-title-wrap">
                                    <h6 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'24px', fontWeight:'600', letterSpacing:'0px', textTransform:'none'}} ><span className="gdlr-core-title-item-left-icon" style={{fontSize:'18px'}} ><i className="fa fa-file-text-o"  ></i></span>Tour Summary<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                <div className="gdlr-core-text-box-item-content">
                                    <div>
                                        <img src={require('../../upload/map.jpg').default} />
                                    </div>
                                    <p>Ride Our open top bus tour is good way to explore San Francisco Attractions, if you just stay on the bus the whole loop is about 2 hours 15 minutes. However you have also the choice to hop on hop off the bus which comes every 30 minutes.</p>
                                    {/* <p>A free multi-language audio tour is now available in nine languages: English, Spanish, Mandarin, Italian, French, Japanese, Korean, German and Taiwanese. Please bring your Wi-Fi enabled device to access the tour.</p> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'19px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div> */}
                        {/* <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-title-item-title-wrap">
                                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'15px', fontWeight:'500', letterSpacing:'0px', textTransform:'none'}}>Departure & Return Location <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="gdlr-core-pbf-column gdlr-core-column-30">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-text-box-item-content">
                                                <p>John F.K. International Airport (<a href="#">Google Map</a>)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'19px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-title-item-title-wrap">
                                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'15px', fontWeight:'500', letterSpacing:'0px', textTransform:'none'}} >Departure Time<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-text-box-item-content">
                                                <p>3 Hours Before Flight Time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'19px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-title-item-title-wrap">
                                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'15px', fontWeight:'500', letterSpacing:'0px', textTransform:'none'}} >Price Includes<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix " style={{paddingBottom:'10px'}} >
                                            <ul>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}}  ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Air fares</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">3 Nights Hotel Accomodation</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Tour Guide</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Entrance Fees</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">All transportation in destination location</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'19px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-title-item-title-wrap">
                                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'15px', fontWeight:'500', letterSpacing:'0px', textTransform:'none'}}>Price Excludes<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix " style={{paddingBottom:'10px'}} >
                                            <ul>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-close" style={{color:'#7f7f7f'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Guide Service Fee</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-close" style={{color:'#7f7f7f'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Driver Service Fee</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-close" style={{color:'#7f7f7f'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Any Private Expenses</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-close" style={{color:'#7f7f7f'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Room Service Fees</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'19px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'0px'}} >
                                            <div className="gdlr-core-title-item-title-wrap">
                                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'15px', fontWeight:'500', letterSpacing:'0px', textTransform:'none'}}>Complementaries<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-column gdlr-core-column-30">
                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix " style={{paddingBottom:'10px'}} >
                                            <ul>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}}  ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Umbrella</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Sunscreen</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">T-Shirt</span></div>
                                                </li>
                                                <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-check" style={{color:'#4692e7'}} ></i></span>
                                                    <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Entrance Fees</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'45px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr">
                                <div className="gdlr-core-title-item-title-wrap">
                                    <h6 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'16px', fontWeight:'600', letterSpacing:'0px', textTransform:'none'}}>What to Expect<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style={{paddingBottom:'10px'}} >
                                <div className="gdlr-core-text-box-item-content">
                                    <p>Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix ">
                                <ul>
                                    <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-dot-circle-o" style={{color:'#4692e7'}} ></i></span>
                                        <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Ipsum Amet Mattis Pellentesque</span></div>
                                    </li>
                                    <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-dot-circle-o" style={{color:'#4692e7'}} ></i></span>
                                        <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Ultricies Vehicula Mollis Vestibulum Fringilla</span></div>
                                    </li>
                                    <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-dot-circle-o" style={{color:'#4692e7'}} ></i></span>
                                        <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Condimentum Sollicitudin Fusce Vestibulum Ultricies</span></div>
                                    </li>
                                    <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-dot-circle-o" style={{color:'#4692e7'}} ></i></span>
                                        <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Sollicitudin Consectetur Quam Ligula Vehicula</span></div>
                                    </li>
                                    <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-dot-circle-o" style={{color:'#4692e7'}} ></i></span>
                                        <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Cursus Pharetra Purus Porta Parturient</span></div>
                                    </li>
                                    <li className=" gdlr-core-skin-divider"><span className="gdlr-core-icon-list-icon-wrap"><i className="gdlr-core-icon-list-icon fa fa-dot-circle-o" style={{color:'#4692e7'}} ></i></span>
                                        <div className="gdlr-core-icon-list-content-wrap"><span className="gdlr-core-icon-list-content">Risus Malesuada Tellus Porta Commodo</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'15px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="gdlr-core-pbf-wrapper " style={{padding:'20px 0px 30px 0px'}}  data-skin="Blue Icon" id="description">
                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                    <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom:'35px'}} >
                                <div className="gdlr-core-title-item-title-wrap">
                                    <h6 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'24px', fontWeight:'600', letterSpacing:'0px', textTransform:'none'}}><span className="gdlr-core-title-item-left-icon" style={{fontSize:'18px'}} ><i className="fa fa-bus"  ></i></span>Description<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-toggle-box-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-toggle-box-style-background-title gdlr-core-left-align" style={{paddingBottom:'25px'}}  >
                                <div className="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                    <div className="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                    <div className="gdlr-core-toggle-box-item-content-wrapper">
                                        <h4 className="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span className="gdlr-core-head" >Alcatraz Highlights</span></h4>
                                        <div className="gdlr-core-toggle-box-item-content">
                                        <p>Alcatraz considered the most legendary prison in the world for many reasons such as the escape attempts, even turned into a feature film in the year 1979. The movie ‘Escape from Alcatraz’ also the name of the most dangerous prisoners who were locked up over there at that time like Alcaponi. While touring the Alcatraz with the narrative audio tour you will realize that the island of Alcatraz in San Francisco Bay has been an asset to the U.S. Army, the federal prison system, jailhouse folklore, and the historical evolution of the West Coast. Despite its reputation as a cold and unforgiving penitentiary, Alcatraz is now one of the most prominent tourist attraction in San Francisco, that is why the ticket sell out quick as the prison can allow limited number.</p>
                                            <h6>Weather</h6>
                                            <p>The weather on Alcatraz can be somewhat unpredictable and can change quickly - it may be warm and sunny in the city and very windy and cool on the island. Summer days can sometimes be as cool as winter due to thick fog and strong winds. We recommend dressing in layers.</p>
                                            <h6>Accessibility</h6>
                                            <p>There are many walking hazards that include uneven surfaces, steps, cracks, and potholes which may create hazards, especially for those with health conditions. The island has numerous steep road and pathways that may be challenging for some to navigate. Alcatraz does not have any wheelchairs for loan, but does offer an electric shuttle service for those unable to climb hills. SEAT (Sustainable Easy Access Transport) offers first-come, first-served seating. The tram runs on a regular schedule between the dock and main cellhouse.</p>
                                            <h6>Exhibits & Programs</h6>
                                            <p>Alcatraz offers a richly unique experience to visitors. It is a historic location that allows the visitor to experience the various and opulent layers history as it was during the periods of operation. The award-winning multilingual audio tour improves the experience with the actual voices of inmates, officers, and residents recounting their memories of life on Alcatraz. The island offers exhibits that chip away the various layers and periods of history through video, audio photographic, Alcatraz nature and historic garden exhibits. Alcatraz includes a fully accessible theatre which provides an orientation video produced by the Discovery Channel and is open captioned in English and Spanish. We recommend also buying souvenirs in Alcatraz as some of them are available only in The island.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <img src={require('../../upload/map.jpg').default} />
                                </div> */}
                                <div className="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                    <div className="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                    <div className="gdlr-core-toggle-box-item-content-wrapper">
                                        <h4 className="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span className="gdlr-core-head" >Important Alcatraz Tour Information</span></h4>
                                        <div className="gdlr-core-toggle-box-item-content">
                                            <p>Please note that we will be sold out of Alcatraz tickets many days this year. Order your Alcatraz Tickets today to avoid missing out on the opportunity to see the most popular tourist attraction in San Francisco.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'25px'}} >
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider" style={{borderBottomWidth:'2px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gdlr-core-pbf-wrapper " style={{padding:'0px 0px 30px 0px'}} data-skin="Blue Icon" id="cancellation">
                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                    <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom:'35px'}} >
                                <div className="gdlr-core-title-item-title-wrap">
                                    <h6 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'24px', fontWeight:'600', letterSpacing:'0px', textTransform:'none'}} ><span className="gdlr-core-title-item-left-icon" style={{fontSize:'18px'}} ><i className="fa fa-map-o"  ></i></span>Cancellation Policy<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style={{paddingBottom:'55px'}} >
                                <div className="gdlr-core-text-box-item-content">
                                    <p>When you reserve seats without paying, you can cancel at anytime without being charged but We will hold your Alcatraz ticket only 24 hours prior departure unless you call or you text to confirm that you are coming to pay for your ticket.</p>
                                    <p>After payment confirmation, the ticket is yours and will not be released to other customers.</p>
                                    <p>Payment will be refunded at a certain particular circumstances or Force Majeure, Bad weather resulting Alcatraz not operating or government shut down.</p>
                                    <p>The same thing for Bus or Bay cruise, the full amount will be refunded. If you don’t get the service because of factors out of your control.</p>
                                    <p>We don’t refund if you did the tour. We are not responsible for the other service quality operations as we are a third party, but rarely we notice an inconvenience as we deal only with professional tour operators.</p>
                                    {/* <div className="">
                                        <iframe src="https://www.google.com/maps/d/embed?mid=1mGgtylMQHGAKR6HR8r8YLe5W4LU" width="100%" height="480"></iframe>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style={{marginBottom:'25px'}}>
                                <div className="gdlr-core-divider-line gdlr-core-skin-divider" style={{borderBottomWidth:'2px'}} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gdlr-core-pbf-wrapper " style={{padding:'0px 0px 30px 0px'}} data-skin="Blue Icon" id="photos">
                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                    <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom:'35px'}} >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="gdlr-core-title-item-title-wrap">
                                        <h6 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'24px', fontWeight:'600', letterSpacing:'0px', textTransform:'none'}} ><span className="gdlr-core-title-item-left-icon" style={{fontSize:'18px'}}><i className="icon_images"  ></i></span>Photos<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6>
                                    </div>
                                    <div className="hashtag">
                                        <h5 className="mb-0">#alcatraz</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-gallery-item gdlr-core-item-pdb clearfix  gdlr-core-gallery-item-style-slider gdlr-core-item-pdlr ">
                                <Slider {...settings}>
                                    <div>
                                        <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                            <img src={require('../../upload/map.jpg').default} alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                            <img src={require('../../upload/photos_2.jpg').default} alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                            <img src={require('../../upload/photos_3.jpg').default}  alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                            <img src={require('../../upload/photos_4.jpg').default} alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span>
                                        </div>
                                    </div>
                                    
                                </Slider>
                                {/* <div className="gdlr-core-flexslider flexslider gdlr-core-js-2 " data-type="slider" data-effect="default" data-nav="bullet">
                                    <ul className="slides">
                                        <li>
                                            <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                                <a className="gdlr-core-ilightbox gdlr-core-js " href="upload/pexels-photo-copy-2.jpg" data-ilightbox-group="gdlr-core-img-group-1"><img src={require('../../upload/pexels-photo-copy-2-1500x1000.jpg').default} alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                                <a className="gdlr-core-ilightbox gdlr-core-js " href="upload/photo-1451337516015-6b6e9a44a8a3.jpg" data-ilightbox-group="gdlr-core-img-group-1"><img src={require('../../upload/photo-1451337516015-6b6e9a44a8a3-1500x1000.jpg').default} alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                                <a className="gdlr-core-ilightbox gdlr-core-js " href="upload/italian-landscape-mountains-nature.jpg" data-ilightbox-group="gdlr-core-img-group-1"><img src={require('../../upload/italian-landscape-mountains-nature-1500x1000.jpg').default}  alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                                <a className="gdlr-core-ilightbox gdlr-core-js " href="upload/shutterstock_195507533.jpg" data-caption="Map" data-ilightbox-group="gdlr-core-img-group-1"><img src={require('../../upload/shutterstock_195507533-1500x1000.jpg').default} alt="" width="1500" height="1000" /><span className="gdlr-core-image-overlay "><i className="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SingleTourFullInfo;
