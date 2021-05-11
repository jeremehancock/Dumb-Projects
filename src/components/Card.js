import React from "react";

const Card = ({ image, title, link }) => (
  <div className="card">
    <a href={link} target="_blank" rel="noreferrer">{image}</a>
    <p>{title}</p>
  </div>
);

export default Card;
