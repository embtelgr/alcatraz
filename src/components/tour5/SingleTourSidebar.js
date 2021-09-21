import React from "react";

function SingleTourSidebar(props) {
  return (
    <div>
        <div className="tourmaster-tour-booking-bar-container tourmaster-container">
            <div className="tourmaster-tour-booking-bar-container-inner">
                <div className="tourmaster-tour-booking-bar-anchor tourmaster-item-mglr"></div>
                <div className="tourmaster-tour-booking-bar-wrap tourmaster-item-mglr" id="tourmaster-tour-booking-bar-wrap">
                    <div className="tourmaster-tour-booking-bar-outer">
                        <div className="tourmaster-header-price tourmaster-item-mglr">
                            <div className="tourmaster-header-price-ribbon">10% Off</div>
                            <div className="tourmaster-header-price-wrap">
                                <div className="tourmaster-header-price-overlay"></div>
                                <div className="tourmaster-tour-price-wrap tourmaster-discount"><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$180</span></span><span className="tourmaster-tour-discount-price">$150</span><span className="fa fa-info-circle tourmaster-tour-price-info" data-rel="tipsy" title="The initial price based on 1 adult with the lowest price in low season"></span></div>
                            </div>
                        </div>
                        <div className="tourmaster-tour-booking-bar-inner">
                            <div className="text-center" style={{padding:'40px'}}>
                                <h6 style={{lineHeight:'1.5'}}>Call Us Now to <br/>Book This Tour</h6>
                                <div className="mt-5 mb-5">
                                    <a href="tel:4152837321" className="default_button">(415) 283 7321</a>
                                </div>
                                <small style={{color:'#232323'}}>Parliamo Italiano!</small><br/>
                                <small style={{color:'#232323'}}>Se Habla Español.</small>
                            </div>
                            {/* <div className="tourmaster-booking-tab-title clearfix" id="tourmaster-booking-tab-title">
                                <div className="tourmaster-booking-tab-title-item tourmaster-active" data-tourmaster-tab="booking">Booking Form</div>
                                <div className="tourmaster-booking-tab-title-item" data-tourmaster-tab="enquiry">Enquiry Form</div>
                            </div> */}
                            {/* <div className="tourmaster-booking-tab-content" data-tourmaster-tab="enquiry">
                                <div className="tourmaster-tour-booking-enquiry-wrap">
                                    <form className="tourmaster-enquiry-form tourmaster-form-field tourmaster-with-border clearfix" id="tourmaster-enquiry-form" data-ajax-url="https://demo.goodlayers.com/traveltour/wp-admin/admin-ajax.php" data-action="tourmaster_send_enquiry_form" data-validate-error="Please fill all required fields.">
                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-full-name tourmaster-type-text clearfix">
                                            <div className="tourmaster-head">Full Name<span className="tourmaster-req">*</span></div>
                                            <div className="tourmaster-tail clearfix">
                                                <input type="text" name="full-name" value="" data-required />
                                            </div>
                                        </div>
                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-email-address tourmaster-type-email clearfix">
                                            <div className="tourmaster-head">Email Address<span className="tourmaster-req">*</span></div>
                                            <div className="tourmaster-tail clearfix">
                                                <input type="email" name="email-address" value="" data-required />
                                            </div>
                                        </div>
                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-travel-date tourmaster-type-datepicker clearfix">
                                            <div className="tourmaster-head">Travel Date<span className="tourmaster-req">*</span></div>
                                            <div className="tourmaster-tail clearfix">
                                                <input type="text" className="tourmaster-datepicker" name="travel-date" value="" /><i className="fa fa-calendar"></i></div>
                                        </div>
                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-person tourmaster-type-combobox clearfix">
                                            <div className="tourmaster-head">Person<span className="tourmaster-req">*</span></div>
                                            <div className="tourmaster-tail clearfix">
                                                <div className="tourmaster-combobox-wrap">
                                                    <select name="person" data-required>
                                                        <option value="Person">Person</option>
                                                        <option value="1-4">1-4</option>
                                                        <option value="5-9">5-9</option>
                                                        <option value="10+">10+</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-your-enquiry tourmaster-type-textarea clearfix">
                                            <div className="tourmaster-head">Your Enquiry<span className="tourmaster-req">*</span></div>
                                            <div className="tourmaster-tail clearfix">
                                                <textarea name="your-enquiry" data-required></textarea>
                                            </div>
                                        </div>
                                        <div className="tourmaster-enquiry-form-message"></div>
                                        <input type="hidden" name="tour-id" value="4643" />
                                        <input type="submit" className="tourmaster-button" value="Submit Enquiry" />
                                    </form>
                                </div>
                            </div> */}
                            {/* <div className="tourmaster-booking-tab-content tourmaster-active" data-tourmaster-tab="booking">
                                <form className="tourmaster-single-tour-booking-fields tourmaster-update-header-price tourmaster-form-field tourmaster-with-border" method="post" action="https://demo.goodlayers.com/traveltour/?tourmaster-payment" id="tourmaster-single-tour-booking-fields" data-ajax-url="https://demo.goodlayers.com/traveltour/wp-admin/admin-ajax.php">
                                    <input type="hidden" name="tour-id" value="4643" />
                                    <div className="tourmaster-tour-booking-date clearfix" data-step="1"><i className="fa fa-calendar"></i>
                                        <div className="tourmaster-tour-booking-date-input">
                                            <div className="tourmaster-tour-booking-date-display">February 5, 2022</div>
                                            <input type="hidden" name="tour-date" value="2022-02-05" />
                                        </div>
                                    </div>
                                    <div className="tourmaster-tour-booking-package" data-step="2">
                                        <div className="tourmaster-tour-booking-next-sign"><span></span></div><i className="icon_check"></i>
                                        <div className="tourmaster-combobox-list-wrap">
                                            <div className="tourmaster-combobox-list-display"><span>Select a package</span></div>
                                            <input type="hidden" name="package" value="" />
                                            <ul>
                                                <li data-value="Standard" className=""><span className="tourmaster-combobox-list-title">Standard</span><span className="tourmaster-combobox-list-caption">No food, no entry tickets</span><span className="tourmaster-combobox-list-time">Start Time: 12:00</span><span className="tourmaster-combobox-list-avail">Available: -4 seats</span></li>
                                                <li data-value="Special Package" className=""><span className="tourmaster-combobox-list-title">Special Package</span><span className="tourmaster-combobox-list-caption">With food & entry tickets</span><span className="tourmaster-combobox-list-time">Start Time: 12:00</span><span className="tourmaster-combobox-list-avail">Available: -4 seats</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                                <div className="tourmaster-lightbox-content-wrap" data-tmlb-id="proceed-without-login">
                                    <div className="tourmaster-lightbox-head">
                                        <h3 className="tourmaster-lightbox-title">Proceed Booking</h3><i className="tourmaster-lightbox-close icon_close"></i></div>
                                    <div className="tourmaster-lightbox-content">
                                        <div className="tourmaster-login-form2-wrap clearfix">
                                            
                                            <div className="tourmaster-login2-right">
                                                <h3 className="tourmaster-login2-right-title">Don&#039;t have an account? Create one.</h3>
                                                <div className="tourmaster-login2-right-content">
                                                    <div className="tourmaster-login2-right-description">When you book with an account, you will be able to track your payment status, track the confirmation and you can also rate the tour after you finished the tour.</div> <a className="tourmaster-button" href="../../register/indexbd2a.html?redirect=payment">Sign Up</a></div>
                                                <h3 className="tourmaster-login2-right-title">Or Continue As Guest</h3> <a className="tourmaster-button" href="../../index4bb8.html?tourmaster-payment">Continue As Guest</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    <div className="tourmaster-tour-booking-bar-widget  traveltour-sidebar-area">
                        <div id="text-11" className="widget widget_text traveltour-widget">
                            <div className="textwidget"><span className="gdlr-core-space-shortcode" style={{marginTop:'-20px'}} ></span>
                                <div className="gdlr-core-widget-list-shortcode" id="gdlr-core-widget-list-0">
                                    <h3 className="gdlr-core-widget-list-shortcode-title">Why Book With Us?</h3>
                                    <ul>
                                        <li><i className="fa fa-dollar" style={{fontSize:'15px', color:'#0b6699', marginRight:'13px'}} ></i>No-hassle best price guarantee</li>
                                        <li><i className="fa fa-headphones" style={{fontSize:'15px', color:'#0b6699', marginRight:'10px'}} ></i>Customer care available 24/7</li>
                                        <li><i className="fa fa-star" style={{fontSize:'15px', color:'#0b6699', marginRight:'10px'}} ></i>Hand-picked Tours & Activities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="text-12" className="widget widget_text traveltour-widget">
                            <div className="textwidget"><span className="gdlr-core-space-shortcode" style={{marginTop:'-10px'}}></span>
                                <div className="gdlr-core-widget-box-shortcode sidebar_bg" style={{color:'#c9e2ff'}} >
                                    <h3 className="gdlr-core-widget-box-shortcode-title" style={{color:'#ffffff'}} >Get a Question?</h3>
                                    <div className="gdlr-core-widget-box-shortcode-content">
                                        <p style={{fontSize:'16px', color:'#fff'}}>Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</p>
                                        <p><a href="tel:4152837321"><i className="fa fa-phone" style={{fontSize:'20px', color:'#ffcf2a', marginRight:'10px'}}></i> <span style={{fontSize:'20px', color:'#ffcf2a', fontWeight:'600'}} >(415) 283 7321</span></a></p>
                                        <p><i className="fa fa-envelope-o" style={{fontSize:'17px', color:'#ffcf2a', marginRight:'10px'}}></i> <span style={{fontSize:'14px', color:'#fff', fontWeight:'600'}} >alcatraztourstickets@gmail.com</span></p>
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

export default SingleTourSidebar;
