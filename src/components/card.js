import React from "react";
import "./card.css";

const Card = props => (
 
    <div >
      <div className="card-body">
          <img className="card-img-top" 
            src={props.image} 
            alt={props.name} 
            id={props.id}
          />
       </div>
    </div>

  );

export default Card;