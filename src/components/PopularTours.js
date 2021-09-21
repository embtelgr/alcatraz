import React from "react";

import "./HeroSection.scss";
import { Link } from "./../util/router.js";
function PopularTours(props) {
  return (
    <div>
            <div className="gdlr-core-pbf-wrapper " style={{padding:'50px 0px 60px 0px'}} >
                <div className="gdlr-core-pbf-background-wrap">
                    <div className="popular_tours gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'}} ></div>
                </div>
                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                    <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'0px'}}>
                                <div className="gdlr-core-title-item-title-wrap">
                                    <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'28px', fontWeight:'700', letterSpacing:'0px', textTransform:'none'}} >What We Offer<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align" style={{paddingBottom:'52px'}} ><Link className="gdlr-core-button  gdlr-core-button-transparent gdlr-core-button-no-border" to="/tours" style={{fontSize:'15px', fontWeight:'400', letterSpacing:'0px', color:'#0b6699', padding:'8px 0px 0px 0px'}} ><span className="gdlr-core-content" >View All Popular Plans</span><i className="gdlr-core-pos-right fa fa-long-arrow-right" style={{fontSize:'17px'}} ></i></Link></div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                        <div className="tourmaster-tour-item clearfix  tourmaster-tour-item-style-grid tourmaster-tour-item-column-2 mobile_layout_tours">
                                    <div className="tourmaster-tour-item-holder gdlr-core-js-2 clearfix" data-layout="fitrows">
                                        <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-30">
                                            <div className="tourmaster-tour-grid  tourmaster-price-right-title">
                                                <div className="tourmaster-tour-thumbnail tourmaster-media-image">
                                                    <Link to="/tour/open-bus-city-tour-1"><img src={require('../upload/bustour1.jpg').default} alt="" width="700" height="500" /></Link>
                                                </div>
                                                <div className="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                    <h3 className="tourmaster-tour-title gdlr-core-skin-title" id="h3_6480_0"><Link to="/tour/open-bus-city-tour-1">Alcatraz and An Open Top Bus City Tour</Link></h3>                                                    <div className="tourmaster-tour-price-wrap "><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$130</span></span>
                                                    </div>
                                                    <div className="tourmaster-tour-info-wrap clearfix">
                                                        {/* <div className="tourmaster-tour-info tourmaster-tour-info-duration-text "><i className="icon_clock_alt"></i>1 day</div> */}
                                                    </div>
                                                    <div className="tourmaster-tour-rating tourmaster-tour-rating-empty">0</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-30">
                                            <div className="tourmaster-tour-grid  tourmaster-price-right-title">
                                                <div className="tourmaster-tour-thumbnail tourmaster-media-image">
                                                    <Link to="/tour/open-bus-city-tour-2"><img src={require('../upload/bustour2.jpg').default} alt="" width="700" height="500" /></Link>
                                                </div>
                                                <div className="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                    <h3 className="tourmaster-tour-title gdlr-core-skin-title" id="h3_6480_1"><Link to="/tour/open-bus-city-tour-2">Alcatraz and An Open Top Bus City Tour</Link></h3>
                                                    <div className="tourmaster-tour-price-wrap "><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$150</span></span>
                                                    </div>
                                                    <div className="tourmaster-tour-info-wrap clearfix">
                                                        <div className="tourmaster-tour-info tourmaster-tour-info-duration-text "><i className="icon_clock_alt"></i>2 Days</div>
                                                    </div>
                                                    <div className="tourmaster-tour-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><span className="tourmaster-tour-rating-text">(2 Reviews)</span></div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-30">
                                            <div className="tourmaster-tour-grid  tourmaster-price-right-title">
                                                <div className="tourmaster-tour-thumbnail tourmaster-media-image">
                                                    <Link to="/tour/one-hour-bay-cruise"><img src={require('../upload/baycruisenew.jpg').default} alt="" width="700" height="500" /></Link>
                                                    <div className="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" id="div_6480_0">
                                                        <div className="tourmaster-thumbnail-ribbon-cornor" id="div_6480_1"></div>20% Off</div>
                                                </div>
                                                <div className="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                    <h3 className="tourmaster-tour-title gdlr-core-skin-title" id="h3_6480_2"><Link to="/tour/one-hour-bay-cruise">Alcatraz and 1 Hour Bay Cruise</Link></h3>
                                                    <div className="tourmaster-tour-price-wrap tourmaster-discount"><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$120</span></span><span className="tourmaster-tour-discount-price">$110</span></div>
                                                    <div className="tourmaster-tour-info-wrap clearfix">
                                                        {/* <div className="tourmaster-tour-info tourmaster-tour-info-duration-text "><i className="icon_clock_alt"></i>1 Day</div> */}
                                                    </div>
                                                    <div className="tourmaster-tour-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><span className="tourmaster-tour-rating-text">(2 Reviews)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-30">
                                            <div className="tourmaster-tour-grid  tourmaster-price-right-title">
                                                <div className="tourmaster-tour-thumbnail tourmaster-media-image">
                                                    <Link to="/tour/all-day-bike-tour"><img src={require('../upload/biketour.jpg').default} alt="" width="700" height="500" /></Link>
                                                    <div className="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" id="div_6480_2">
                                                        <div className="tourmaster-thumbnail-ribbon-cornor" id="div_6480_3"></div>25% Off</div>
                                                </div>
                                                <div className="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                    <h3 className="tourmaster-tour-title gdlr-core-skin-title" id="h3_6480_3"><Link to="/tour/all-day-bike-tour">Alcatraz and All Day Bike Tour</Link></h3>
                                                    <div className="tourmaster-tour-price-wrap tourmaster-discount"><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$130</span></span><span className="tourmaster-tour-discount-price">$115</span></div>
                                                    <div className="tourmaster-tour-info-wrap clearfix">
                                                        {/* <div className="tourmaster-tour-info tourmaster-tour-info-duration-text "><i className="icon_clock_alt"></i>1 Day</div> */}
                                                    </div>
                                                    <div className="tourmaster-tour-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i><span className="tourmaster-tour-rating-text">(1 Review)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-30">
                                            <div className="tourmaster-tour-grid  tourmaster-price-right-title">
                                                <div className="tourmaster-tour-thumbnail tourmaster-media-image">
                                                    <Link to="/tour/muir-woods"><img src={require('../upload/muirwoods.jpg').default} alt="" width="700" height="500" /></Link>
                                                    <div className="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" id="div_6480_2">
                                                        <div className="tourmaster-thumbnail-ribbon-cornor" id="div_6480_3"></div>10% Off</div>
                                                </div>
                                                <div className="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                    <h3 className="tourmaster-tour-title gdlr-core-skin-title" id="h3_6480_3"><Link to="/tour/muir-woods">Alcatraz and Muir Woods National Park and Sausolito</Link></h3>
                                                    <div className="tourmaster-tour-price-wrap tourmaster-discount"><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$180</span></span><span className="tourmaster-tour-discount-price">$150</span></div>
                                                    <div className="tourmaster-tour-info-wrap clearfix">
                                                        {/* <div className="tourmaster-tour-info tourmaster-tour-info-duration-text "><i className="icon_clock_alt"></i>1 Day</div> */}
                                                    </div>
                                                    <div className="tourmaster-tour-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><span className="tourmaster-tour-rating-text">(1 Review)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                      
                                    </div>
                                    {/* <div className="gdlr-core-pagination  gdlr-core-style-circle gdlr-core-center-align tourmaster-item-pdlr"><span aria-current='page' className='page-numbers current'>1</span> <a className='page-numbers' href='page/2/index.html'>2</a> <a className='page-numbers' href='page/3/index.html'>3</a>
                                        <a className="next page-numbers" href="page/2/index.html"></a>
                                    </div> */}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    // <Section
    //   bg={props.bg}
    //   textColor={props.textColor}
    //   size={props.size}
    //   bgImage={props.bgImage}
    //   bgImageOpacity={props.bgImageOpacity}
    // >
    //   <Container>
    //     <Row className="align-items-center">
    //       <Col lg={5} className="text-center text-lg-left">
    //         <SectionHeader
    //           title={props.title}
    //           subtitle={props.subtitle}
    //           size={1}
    //           spaced={true}
    //         />

    //         <LinkContainer to={props.buttonPath}>
    //           <Button variant={props.buttonColor} size="lg">
    //             {props.buttonText}
    //           </Button>
    //         </LinkContainer>
    //       </Col>
    //       <Col className="offset-lg-1 mt-5 mt-lg-0 ">
    //         <figure className="HeroSection__image-container mx-auto">
    //           <Image src={props.image} fluid={true} />
    //         </figure>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Section>
  );
}

export default PopularTours;
