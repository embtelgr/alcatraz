import React from "react";
import { Link } from "./../util/router.js";
import "./HeroSection.scss";

function HeroSection(props) {
  return (
    <div>
    <div className="gdlr-core-pbf-wrapper " style={{padding: '165px 0px 165px 0px'}} data-skin="orange">
        <div className="gdlr-core-pbf-background-wrap">
            <div className="main_slider gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundSize: 'cover', backgroundPosition:'center center'}} data-parallax-speed="0.2"></div>
        </div>
        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom: '50px'}}>
                        <div className="gdlr-core-title-item-title-wrap">
                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'52px', textTransform: 'none', color:'#ffffff'}} >Alcatraz Island Is Now Open!<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div><span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'21px', fontStyle:'normal', marginTop:'5px', color:'#ffffff'}}>Your National Park on The Bay!</span></div>
                </div>
                <div className="text-center">
                    <Link to="/book-your-tickets" className="default_button">Book Your Tickets</Link>
                </div>
                
                
            </div>
        </div>
    </div>
    {/* <div className="gdlr-core-pbf-wrapper " style={{marginTop:'-40px', marginRight:'auto', marginLeft:'auto', padding:'50px 20px 0px 30px', maxWidth:'1200px'}} >
        <div className="gdlr-core-pbf-background-wrap" style={{borderRadius:'3px 3px 3px 3px', background:'linear-gradient(rgba(249, 114, 81, 1), rgba(255, 152, 108, 1))', backgroundColor:'#f97251'}} ></div>
        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                <div className=" gdlr-core-pbf-wrapper-container-inner gdlr-core-item-mglr clearfix">
                    <div className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first" data-skin="White Text">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr" style={{paddingBottom:'30px'}} >
                                        <div className="gdlr-core-column-service-media gdlr-core-media-image"><img src={require('../upload/tvicon1.1.png').default} alt="" width="59" height="59" title="tvicon1.1" /></div>
                                        <div className="gdlr-core-column-service-content-wrapper">
                                            <div className="gdlr-core-column-service-title-wrap" style={{marginBottom:'10px'}} >
                                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" style={{fontSize:'13px', letterSpacing:'2px'}} >4 Plans</h3></div>
                                            <div className="gdlr-core-column-service-content" style={{textTransform:'none'}} >
                                                <p>Our expert team handpicked all destinations in this site</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-20" data-skin="White Text">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr" style={{paddingBottom:'30px'}}>
                                        <div className="gdlr-core-column-service-media gdlr-core-media-image"><img src={require('../upload/tvicon2.1.png').default} alt="" width="48" height="50" title="tvicon2.1" /></div>
                                        <div className="gdlr-core-column-service-content-wrapper">
                                            <div className="gdlr-core-column-service-title-wrap" style={{marginBottom:'10px'}}>
                                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" style={{fontSize:'13px', letterSpacing:'2px'}}>Best Price Guarantee</h3></div>
                                            <div className="gdlr-core-column-service-content" style={{textTransform:'none'}}>
                                                <p>Price match within 48 hours of order confirmation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-20" data-skin="White Text">
                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr" style={{paddingBottom:'30px'}}>
                                        <div className="gdlr-core-column-service-media gdlr-core-media-image"><img src={require('../upload/tvicon3.png').default} alt="" width="51" height="51" title="tvicon3" /></div>
                                        <div className="gdlr-core-column-service-content-wrapper">
                                            <div className="gdlr-core-column-service-title-wrap" style={{marginBottom:'10px'}}>
                                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" style={{fontSize:'13px', letterSpacing:'2px'}}>Top Notch support</h3></div>
                                            <div className="gdlr-core-column-service-content" style={{textTransform:'none'}}>
                                                <p>We are here to help, before, during, and even after your trip.</p>
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
    </div> */}
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

export default HeroSection;
