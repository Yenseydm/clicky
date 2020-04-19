import React from "react";
import "../components/card.css";

function Card(props) {
  return (
   <div class="container">

    <div class="card" key={props.id} onClick={() => props.cardClick(props.id, props.clicked)}>
      <div class="card-body">
      <img id={props.name} src={props.image} class="card-img-top" alt={props.name} />
       </div>
    </div>
  
   </div>   
  );
}

export default Card;