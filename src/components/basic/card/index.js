import React from "react";
import Href from "../href";

const Card = ({ image, title, link }) => (
  <div className="card">
    <Href url={link}>
      {typeof image !== "object" ? <img src={image} alt={title} /> : image}
    </Href>
    <p>{title}</p>
  </div>
);

export default Card;
