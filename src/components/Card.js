import React from "react";

const Card = ({ image, title, link, alt }) => (
  <div className="card">
    <a href={link} target="_blank" rel="noreferrer"><img src={image} alt={alt} /></a>
    <p>{title}</p>
  </div>
);

export default Card;
