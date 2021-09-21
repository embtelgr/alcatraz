import React from "react";
import { Link } from "./../util/router.js";
import "./HeroSection.scss";

function AboutUs(props) {
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
            <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_341d_5">
                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                        <div className="gdlr-core-pbf-element">
                            <img src={require('../upload/alcatraz-paper.jpg').default} width="90%" />
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
            <div className="gdlr-core-pbf-column gdlr-core-column-30 ">
                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " id="div_341d_1" data-sync-height="height-3">
                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" id="div_341d_2">
                                <div className="gdlr-core-title-item-title-wrap">
                                    <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" id="h3_341d_0">Why Alcatraz is Famous and sell out quick?<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" id="div_341d_3">
                                <div className="gdlr-core-text-box-item-content" id="div_341d_4">
                                    <p>Alcatraz considered the most legendary prison in the world  for many reasons such as the escape attempts , even turned into a feature film in the year 1979. The movie ‘Escape from Alcatraz’ also the name of the most dangerous prisoners who where locked up over there at that time like  Alcaponi .while touring the Alcatraz with the narrative audio tour you will realize that .the island of Alcatraz in San Francisco Bay has been an asset to the U.S. Army, the federal prison system, jailhouse folklore, and the historical evolution of the West Coast. Despite its reputation as a cold and unforgiving penitentiary, Alcatraz is now one of the most prominent tourist attraction in San Francisco,that is why the ticket sell out quick as the prison can allow limited number.</p>
                                    {/* <img src={require('../upload/alcatraz-map.jpg').default} /> */}
                                    {/* <img src={require('../upload/alcatraz-graphic.jpg').default} /> */}
                                    <p>Among those who served time at the maximum-security facility were the notorious gangster Al “Scarface” Capone (1899-1947) and murderer Robert “Birdman of Alcatraz” Stroud (1890-1963).</p>
                                    <p>No inmate ever successfully escaped The Rock, as the prison was nicknamed, although more than a dozen known attempts were made over the years. After the prison was shut down due to high operating costs, the island was occupied for almost two years, starting in 1969, by a group of Native-American activists.</p>
                                    {/* <p>Today, historic Alcatraz Island, which was also the site of a U.S. military prison from the late 1850s to 1933, is a popular tourist destination.</p> */}
                                    <div className="mt-5">
                                        <Link to="/tours" className="default_button">Visit Alcatraz Now</Link>
                                    </div>
                                </div>
                            </div>
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

export default AboutUs;
