import React from "react";

function SingleTourHeader(props) {
  return (
    <div>
        <div className="tourmaster-single-header single_tour_header_5">
            <div className="tourmaster-single-header-background-overlay"></div>
            <div className="tourmaster-single-header-top-overlay"></div>
            <div className="tourmaster-single-header-overlay"></div>
            <div className="tourmaster-single-header-container tourmaster-container">
                <div className="tourmaster-single-header-container-inner">
                    <div className="tourmaster-single-header-title-wrap tourmaster-item-pdlr">
                        <h1 className="tourmaster-single-header-title">Alcatraz and Muir Wood National Park</h1>
                        <div className="tourmaster-tour-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><span className="tourmaster-tour-rating-text">(1 Review)</span></div>
                    </div>
                    <div className="tourmaster-header-price tourmaster-item-mglr">
                        <div className="tourmaster-header-price-ribbon">10% Off</div>
                        <div className="tourmaster-header-price-wrap">
                            <div className="tourmaster-header-price-overlay"></div>
                            <div className="tourmaster-tour-price-wrap tourmaster-discount"><span className="tourmaster-tour-price"><span className="tourmaster-head">From</span><span className="tourmaster-tail">$180</span></span><span className="tourmaster-tour-discount-price">$150</span><span className="fa fa-info-circle tourmaster-tour-price-info" data-rel="tipsy" title="The initial price based on 1 adult with the lowest price in low season"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SingleTourHeader;
