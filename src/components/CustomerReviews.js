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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomerReviews(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
  return (
    <div>
        <div className="gdlr-core-pbf-wrapper " style={{padding:'110px 0px 60px 0px'}} >
            <div className="gdlr-core-pbf-background-wrap">
                <div className="reviews_bg gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundRepeat:'no-repeat', backgroundPosition:'top center'}}  data-parallax-speed="0.05"></div>
            </div>
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom:'60px'}} >
                            <div className="gdlr-core-title-item-title-wrap">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title" style={{fontSize:'28px', fontWeight:'700', letterSpacing:'0px', textTransform:'none'}} >Customer Reviews<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-testimonial-item gdlr-core-item-pdb clearfix  gdlr-core-testimonial-style-left gdlr-core-item-pdlr">
                        <Slider {...settings}>
                            <div>
                                <div className="gdlr-core-testimonial clearfix">
                                    <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                        <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                        <div className="gdlr-core-testimonial-content-wrap">
                                            <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                <p>Truly a beautiful but yet interesting place to go in San Francisco! Great place to go birding during the spring for nesting season!</p>
                                            </div>
                                            <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/photo-1428931996691-a5108d4cdbf5-150x150.jpg').default} alt="" width="150" height="150" title="photo-1428931996691-a5108d4cdbf5" /></div>
                                                <div className="gdlr-core-testimonial-author-content">
                                                    <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Luaka Smith</div>
                                                    <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i></span>Solo Traveler</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="gdlr-core-testimonial clearfix">
                                    <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                        <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                        <div className="gdlr-core-testimonial-content-wrap">
                                            <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}}>
                                                <p>I have always loved visiting Alcatraz. Such history and being able to walk the cell house is always a fun experience. Additionally, the views you get of the San Francisco Bay are incredible! </p>
                                            </div>
                                            <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/shutterstock_666258808-150x150.jpg').default} alt="" width="150" height="150" title="shutterstock_666258808" /></div>
                                                <div className="gdlr-core-testimonial-author-content">
                                                    <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Jane Doe</div>
                                                    <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i></span>Solo Traveler</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="gdlr-core-testimonial clearfix">
                                    <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                        <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                        <div className="gdlr-core-testimonial-content-wrap">
                                            <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                <p>This place is amazing if you love history! They have an audio tour you can get from your phone, and the sights are so amazing! Well worth the trip.</p>
                                            </div>
                                            <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/psinfinite2-150x150.jpg').default} alt="" width="150" height="150" title="psinfinite2" /></div>
                                                <div className="gdlr-core-testimonial-author-content">
                                                    <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">John Smith</div>
                                                    <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star-half-o"  ></i></span>Solo Traveler</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="gdlr-core-testimonial clearfix">
                                    <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                        <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                        <div className="gdlr-core-testimonial-content-wrap">
                                            <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                <p>You can't imagine how tiny the cells are until you see for yourself. An interesting bit of American history, and nicely presented. </p>
                                            </div>
                                            <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/TNK87N7464-150x150.jpg').default} alt="" width="150" height="150" title="TNK87N7464" /></div>
                                                <div className="gdlr-core-testimonial-author-content">
                                                    <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Jane Smith</div>
                                                    <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star-half-o"  ></i></span>Blogger</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="gdlr-core-testimonial clearfix">
                                    <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                        <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                        <div className="gdlr-core-testimonial-content-wrap">
                                            <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                <p>I had been trying to tour Alcatraz Island for years but it was always booked 6-9 months in advance. I finally got a chance to tour the island & it didn't disappoint!!</p>
                                            </div>
                                            <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/luaka.jpg').default} alt="" width="150" height="150" title="photo-1428931996691-a5108d4cdbf5" /></div>
                                                <div className="gdlr-core-testimonial-author-content">
                                                    <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Paula Tana</div>
                                                    <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i></span>Traveler</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Slider>
                            {/* <div className="gdlr-core-flexslider flexslider gdlr-core-js-2 " data-type="carousel" data-column="3" data-move="1" data-nav="bullet" data-nav-parent="gdlr-core-testimonial-item" data-disable-autoslide="1">
                                <ul className="slides">
                                    <li className="gdlr-core-item-mglr">
                                        <div className="gdlr-core-testimonial clearfix">
                                            <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                                <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                                <div className="gdlr-core-testimonial-content-wrap">
                                                    <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                        <p>Truly a beautiful but yet interesting place to go in San Francisco! Great place to go birding during the spring for nesting season!</p>
                                                    </div>
                                                    <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                        <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/photo-1428931996691-a5108d4cdbf5-150x150.jpg').default} alt="" width="150" height="150" title="photo-1428931996691-a5108d4cdbf5" /></div>
                                                        <div className="gdlr-core-testimonial-author-content">
                                                            <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Luaka Smith</div>
                                                            <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i></span>Solo Traveler</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gdlr-core-item-mglr">
                                        <div className="gdlr-core-testimonial clearfix">
                                            <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                                <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                                <div className="gdlr-core-testimonial-content-wrap">
                                                    <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}}>
                                                        <p>I have always loved visiting Alcatraz. Such history and being able to walk the cell house is always a fun experience. Additionally, the views you get of the San Francisco Bay are incredible! </p>
                                                    </div>
                                                    <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                        <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/shutterstock_666258808-150x150.jpg').default} alt="" width="150" height="150" title="shutterstock_666258808" /></div>
                                                        <div className="gdlr-core-testimonial-author-content">
                                                            <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Jane Doe</div>
                                                            <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i></span>Solo Traveler</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gdlr-core-item-mglr">
                                        <div className="gdlr-core-testimonial clearfix">
                                            <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                                <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                                <div className="gdlr-core-testimonial-content-wrap">
                                                    <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                        <p>This place is amazing if you love history! They have an audio tour you can get from your phone, and the sights are so amazing! Well worth the trip.</p>
                                                    </div>
                                                    <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                        <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/psinfinite2-150x150.jpg').default} alt="" width="150" height="150" title="psinfinite2" /></div>
                                                        <div className="gdlr-core-testimonial-author-content">
                                                            <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">John Smith</div>
                                                            <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star-half-o"  ></i></span>Solo Traveler</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gdlr-core-item-mglr">
                                        <div className="gdlr-core-testimonial clearfix">
                                            <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                                <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                                <div className="gdlr-core-testimonial-content-wrap">
                                                    <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                        <p>You can't imagine how tiny the cells are until you see for yourself. An interesting bit of American history, and nicely presented. </p>
                                                    </div>
                                                    <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                        <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/TNK87N7464-150x150.jpg').default} alt="" width="150" height="150" title="TNK87N7464" /></div>
                                                        <div className="gdlr-core-testimonial-author-content">
                                                            <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Jane Smith</div>
                                                            <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star-half-o"  ></i></span>Blogger</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gdlr-core-item-mglr">
                                        <div className="gdlr-core-testimonial clearfix">
                                            <div className="gdlr-core-testimonial-frame clearfix gdlr-core-skin-e-background">
                                                <div className="gdlr-core-testimonial-quote gdlr-core-quote-font  gdlr-core-top">&#8220;</div>
                                                <div className="gdlr-core-testimonial-content-wrap">
                                                    <div className="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style={{fontSize:'15px'}} >
                                                        <p>I had been trying to tour Alcatraz Island for years but it was always booked 6-9 months in advance. I finally got a chance to tour the island & it didn't disappoint!!</p>
                                                    </div>
                                                    <div className="gdlr-core-testimonial-author-wrap clearfix">
                                                        <div className="gdlr-core-testimonial-author-image gdlr-core-media-image"><img src={require('../upload/photo-1428931996691-a5108d4cdbf5-150x150.jpg').default} alt="" width="150" height="150" title="photo-1428931996691-a5108d4cdbf5" /></div>
                                                        <div className="gdlr-core-testimonial-author-content">
                                                            <div className="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title">Paula Tana</div>
                                                            <div className="gdlr-core-testimonial-position gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:'16px'}} ><span className="gdlr-core-rating"><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i><i className="fa fa-star"  ></i></span>Traveler</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
  );
}

export default CustomerReviews;
