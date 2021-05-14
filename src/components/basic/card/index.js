import React from "react";
import Href from "../href";

const Card = ({ image, title, url, link, newTab }) => (
  <div className="card">
    <Href url={url} link={link} newTab={newTab}>
      {typeof image !== "object" ? <img src={image} alt={title} /> : image}
    </Href>
    <p>{title}</p>
  </div>
);

export default Card;
