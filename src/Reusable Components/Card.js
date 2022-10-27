import React, {useState} from "react";


function Card (props) {
 
  const [variant] = useState(props.variant);
  return (
    <div className="form-container">
      <h1 className={`st-${variant}`}>{props.children}</h1>

      <p className="action">Take your vitamin C tablet</p>

      <p className="instruction">Instructions:</p>

      <p className="extra-information">
        Take on an empty stomach - Pull information from database here
      </p>
      
    </div>
    // <button className={`btn-${variant}`}>{props.children}</button>
  );
}

export default Card;