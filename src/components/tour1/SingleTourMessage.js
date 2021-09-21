import React from "react";

function SingleTourMessage(props) {
  return (
    <div>
            <div className="tourmaster-urgency-message" id="tourmaster-urgency-message" data-expire="86400"><i className="tourmaster-urgency-message-icon fa fa-users"></i>
                <div className="tourmaster-urgency-message-text">5 travellers are considering this tour right now!</div>
            </div>    
    </div>
  );
}

export default SingleTourMessage;
