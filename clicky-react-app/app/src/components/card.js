import React from "react";
import "../components/card.css";

const Card = props => (
 
    <div class="card col-md-3" key={props.id} onClick={() => props.cardClick(props.id, props.clicked)}>
      <div class="card-body">
      <img id={props.name} src={props.image} class="card-img-top" alt={props.name} />
       </div>
    </div>

  );


export default Card;