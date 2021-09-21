import React from "react";
import { Link } from "./../util/router.js";


function StickyCTAButton(props) {
  return (
    <div>
          <div className="sticky_cta_button">
              <Link to="/book-your-tickets" className="default_button">Get Your Tickets</Link>
          </div>    
    </div>
  );
}

export default StickyCTAButton;
