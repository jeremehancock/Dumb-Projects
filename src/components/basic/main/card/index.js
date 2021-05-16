import React from "react";
import Href from "../../href";

const Card = ({ image, title, url, link, newTab }) => (
  <div className="mx-5 md:mx-2 rounded overflow-hidden shadow-lg mb-10 md:mb-16 md:transition md:transform md:hover:scale-110 md:duration-200 p-5 bg-gray-100">
    <Href url={url} link={link} newTab={newTab}>
      {typeof image !== "object" ? (
        <img src={image} alt={title} className="w-full" />
      ) : (
        image
      )}
      <div className="text-antique-bronze text-center text-xl mt-4 mb-2">
        {title}
      </div>
    </Href>
  </div>
);

export default Card;
