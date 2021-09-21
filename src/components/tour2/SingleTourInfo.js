import React from "react";

function SingleTourInfo(props) {
  return (
    <div>
        <div className="tourmaster-tour-info-outer">
            <div className="tourmaster-tour-info-outer-container tourmaster-container">
                <div className="tourmaster-tour-info-wrap clearfix">
                    <div className="tourmaster-tour-info tourmaster-tour-info-duration-text tourmaster-item-pdlr"><i className="icon_clock_alt"></i>2 Days</div>
                    <div className="tourmaster-tour-info tourmaster-tour-info-availability tourmaster-item-pdlr"><i className="fa fa-calendar"></i>Booking : Call to Book</div>
                    <div className="tourmaster-tour-info tourmaster-tour-info-departure-location tourmaster-item-pdlr"><i className="flaticon-takeoff-the-plane"></i>San Francisco</div>
                    {/* <div className="tourmaster-tour-info tourmaster-tour-info-return-location tourmaster-item-pdlr"><i className="flaticon-plane-landing"></i>Finland</div> */}
                    <div className="tourmaster-tour-info tourmaster-tour-info-minimum-age tourmaster-item-pdlr"><i className="fa fa-user"></i>Min Age : 11+</div>
                    {/* <div className="tourmaster-tour-info tourmaster-tour-info-maximum-people tourmaster-item-pdlr"><i className="fa fa-users"></i>Max People : 42</div> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default SingleTourInfo;
