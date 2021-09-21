import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import { useLocation } from 'react-router-dom';


function NavbarCustom(props) {
  const auth = useAuth();
  let location = useLocation();
    console.log(location);
    console.log(props)
  return (
      <div>
    <div className="traveltour-mobile-header-wrap">
        {/* <div className="traveltour-top-bar">
            <div className="traveltour-top-bar-background"></div>
            <div className="traveltour-top-bar-container clearfix traveltour-top-bar-full ">
                <div className="traveltour-top-bar-left traveltour-item-pdlr travel-tour-hide-on-mobile"><i className="fa fa-phone" style={{fontSize:'16px', color:'#94999f', marginRight:'10px'}}></i> 1.820.3345.33
                    <i className="fa fa-envelope-o" style={{fontSize:'16px', color:'#94999f', marginRight:'10px', marginLeft:'30px'}}></i> Contact@TravelTourWP.com
                </div>
                <div className="traveltour-top-bar-right traveltour-item-pdlr">
                    <div className="traveltour-top-bar-right-social"><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="facebook"><i className="fa fa-facebook" ></i></a><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="flickr"><i className="fa fa-flickr" ></i></a><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="google-plus"><i className="fa fa-google-plus" ></i></a><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="twitter"><i className="fa fa-twitter" ></i></a></div>
                    <div className="tourmaster-user-top-bar tourmaster-guest"><a className="tourmaster-user-top-bar-login" href="#"><i className="icon_lock_alt" ></i><span className="tourmaster-text" >Login</span></a><a className="tourmaster-user-top-bar-signup" href="#"><i className="fa fa-user" ></i><span className="tourmaster-text" >Sign Up</span></a></div>
                </div>
            </div>
        </div> */}
        <div className="traveltour-mobile-header traveltour-header-background traveltour-style-slide" id="traveltour-mobile-header">
            <div className="traveltour-mobile-header-container traveltour-container">
                <div className="traveltour-logo  traveltour-item-pdlr">
                    <div className="traveltour-logo-inner">
                        <Link to="/"><img src={require('../upload/alcatraz-logo.png').default} alt="" width="250" title="logo-v3" /></Link>
                    </div>
                </div>
                <div className="traveltour-mobile-menu-right">
                    <div className="traveltour-main-menu-search" id="traveltour-mobile-top-search"><i className="fa fa-search"></i></div>
                    {/* <div className="traveltour-top-search-wrap">
                        <div className="traveltour-top-search-close"></div>

                        <div className="traveltour-top-search-row">
                            <div className="traveltour-top-search-cell">
                                <form role="search" method="get" className="search-form" action="index.html">
                                    <input type="text" className="search-field traveltour-title-font" placeholder="Search..." value="" name="s" />
                                    <div className="traveltour-top-search-submit"><i className="fa fa-search"></i></div>
                                    <input type="submit" className="search-submit" value="Search">
                                    <div className="traveltour-top-search-close"><i className="icon_close"></i></div>
                                </form>
                            </div>
                        </div>

                    </div> */}
                    <div className="traveltour-mobile-menu"><a className="traveltour-mm-menu-button traveltour-mobile-menu-button traveltour-mobile-button-hamburger" href="#traveltour-mobile-menu"><span></span></a>
                        <div className="traveltour-mm-menu-wrap traveltour-navigation-font" id="traveltour-mobile-menu" data-slide="right">
                            <ul id="menu-main-navigation" className="m-menu">
                                <li className="menu-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="menu-item menu-item-has-children"><a href="#">Tours</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <Link to="/tour/open-bus-city-tour-1">Alcatraz and An Open Top Bus City Tour (1 Day)</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/tour/open-bus-city-tour-2">Alcatraz and An Open Top Bus City Tour (2 Days)</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/tour/one-hour-bay-cruise">Alcatraz and 1 Hour Bay Cruise</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/tour/all-day-bike-tour">Alcatraz and All Day Bike Tour</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="menu-item">
                                    <a href="https://g.page/r/CdrJev3JMDfvEAg/review" target="_blank">Write a Review</a>
                                </li>
                                <li className="menu-item" style={{marginTop:'20px'}}>
                                    <Link to="/book-your-tickets" className="default_button" style={{padding:'10px', textAlign:'center'}}>Book Your Tickets</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="traveltour-top-bar traveltour-with-divider" style={{padding:'10px 0px', textAlign:'center'}}>
                {/* <div className="traveltour-top-bar-background"></div> */}
                <div className="traveltour-top-bar-container clearfix traveltour-top-bar-full ">
                    <p className="topbar_text"><strong>Get minimum 10% discount on first Booking. </strong> <Link to="/tours"><strong>Explore Our Tours</strong></Link></p>
                    {/* <div className="traveltour-top-bar-left traveltour-item-pdlr"><i className="fa fa-phone" style="font-size: 16px ;color: #94999f ;margin-right: 10px ;"></i> 1.820.3345.33
                        <i className="fa fa-envelope-o" style="font-size: 16px ;color: #94999f ;margin-left: 30px ;margin-right: 10px ;"></i> Contact@TravelTourWP.com</div>
                    <div className="traveltour-top-bar-right traveltour-item-pdlr">
                        <div className="traveltour-top-bar-right-social"><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="facebook"><i className="fa fa-facebook" ></i></a><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="flickr"><i className="fa fa-flickr" ></i></a><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="google-plus"><i className="fa fa-google-plus" ></i></a><a href="#" target="_blank" className="traveltour-top-bar-social-icon" title="twitter"><i className="fa fa-twitter" ></i></a></div>
                        <div className="tourmaster-user-top-bar tourmaster-guest"><a className="tourmaster-user-top-bar-login" href="#"><i className="icon_lock_alt" ></i><span className="tourmaster-text" >Login</span></a><a className="tourmaster-user-top-bar-signup" href="#"><i className="fa fa-user" ></i><span className="tourmaster-text" >Sign Up</span></a></div>
                    </div> */}
                </div>
            </div>
    <header className="traveltour-header-wrap traveltour-header-style-plain  traveltour-style-menu-right traveltour-sticky-navigation traveltour-style-fixed">
                <div className="traveltour-header-background"></div>
                <div className="traveltour-header-container  traveltour-container">

                    <div className="traveltour-header-container-inner clearfix">
                        <div className="traveltour-logo  traveltour-item-pdlr">
                            <div className="traveltour-logo-inner">
                                <Link to="/"><img src={require('../upload/alcatraz-logo.png').default} alt="" height="52" title="logo-v3" /></Link>
                            </div>
                        </div>
                        <div className="traveltour-navigation traveltour-item-pdlr clearfix ">
                            <div className="traveltour-main-menu" id="traveltour-main-menu">
                                    <ul id="menu-main-navigation-1" className="sf-menu">
                                        <li className={location.pathname == '/' ? 'menu-item current-menu-item traveltour-normal-menu' : 'menu-item traveltour-normal-menu' } >
                                            <Link to="/">Home</Link>
                                            {/* <a href="/" className="sf-with-ul-pre">Home</a> */}
                                        </li>
                                        <li className={location.pathname == '/about' ? 'menu-item current-menu-item traveltour-normal-menu' : 'menu-item traveltour-normal-menu' } >
                                            <Link to="/about" >About</Link>
                                            {/* <a href="#" className="sf-with-ul-pre">About</a> */}
                                        </li>
                                        <li className={location.pathname == '/tours' ? 'menu-item current-menu-item traveltour-normal-menu' : 'menu-item traveltour-normal-menu' } >
                                            {/* <a href="#" className="sf-with-ul-pre">Tours</a> */}
                                            <Link to="/tours" >Tours</Link>
                                        </li>
                                        <li className={location.pathname == '/contact' ? 'menu-item current-menu-item traveltour-normal-menu' : 'menu-item traveltour-normal-menu' } >
                                            <Link to="/contact" >Contact</Link>
                                        </li>
                                        <li className='menu-item traveltour-normal-menu' >
                                            <a href="https://g.page/r/CdrJev3JMDfvEAg/review" target="_blank">Write a Review</a>
                                        </li>
                                        {/* <li className="menu-item traveltour-normal-menu">
                                            <a href="#" className="default_button" style={{marginLeft:'20px'}}>Book Your Tickets</a>
                                        </li> */}
                                        
                                    </ul>
                                    <div>
                                        <Link to="/book-your-tickets" className="default_button" style={{marginLeft:'35px'}}>Book Your Tickets</Link>
                                    </div>
                                {/* <div className="traveltour-navigation-slide-bar" id="traveltour-navigation-slide-bar"></div> */}
                            </div>
                            <div className="traveltour-main-menu-right-wrap clearfix ">
                                {/* <div className="traveltour-main-menu-search" id="traveltour-top-search"><i className="fa fa-search"></i></div>
                                <div className="traveltour-top-search-wrap">
                                    <div className="traveltour-top-search-close"></div>

                                    <div className="traveltour-top-search-row">
                                        <div className="traveltour-top-search-cell">
                                            <form role="search" method="get" className="search-form" action="index.html">
                                                <input type="text" className="search-field traveltour-title-font" placeholder="Search..." value="" name="s" />
                                                <div className="traveltour-top-search-submit"><i className="fa fa-search"></i></div>
                                                <input type="submit" className="search-submit" value="Search" />
                                                <div className="traveltour-top-search-close"><i className="icon_close"></i></div>
                                            </form>
                                        </div>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                

                    </div>
                
                </div>
                
            </header>
            </div>
    // <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand>
    //         <img
    //           className="d-inline-block align-top"
    //           src={props.logo}
    //           alt="Logo"
    //           height="30"
    //         />
    //       </Navbar.Brand>
    //     </LinkContainer>

    //     <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
    //     <Navbar.Collapse id="navbar-nav" className="justify-content-end">
    //       <Nav>
    //         {auth.user && (
    //           <NavDropdown id="dropdown" title="Account" alignRight={true}>
    //             <LinkContainer to="/dashboard">
    //               <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
    //             </LinkContainer>

    //             <LinkContainer to="/settings/general">
    //               <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
    //             </LinkContainer>

    //             <Dropdown.Divider />

    //             <LinkContainer to="/auth/signout">
    //               <NavDropdown.Item
    //                 active={false}
    //                 onClick={(e) => {
    //                   e.preventDefault();
    //                   auth.signout();
    //                 }}
    //               >
    //                 Sign out
    //               </NavDropdown.Item>
    //             </LinkContainer>
    //           </NavDropdown>
    //         )}

    //         {!auth.user && (
    //           <Nav.Item>
    //             <LinkContainer to="/auth/signin">
    //               <Nav.Link active={false}>Sign in</Nav.Link>
    //             </LinkContainer>
    //           </Nav.Item>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default NavbarCustom;
