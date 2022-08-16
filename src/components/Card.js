import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="cat" className="card-img-top" />
      <div className="card-body">
        <h4>{props.title}</h4>
        <small className="text-muted">{props.published}</small>
      </div>
    </div>
  );
};

export default Card;
