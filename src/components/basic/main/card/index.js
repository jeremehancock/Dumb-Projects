import React from "react";
import Href from "../../href";
import Image from "../../image";

const Card = ({ image, title, url, link, newTab }) => (
  <div className="w-full lg:w-1/4 mx-5 md:mx-2 rounded shadow-lg mb-10 md:mb-16 md:transition md:transform md:hover:scale-110 md:duration-200 p-5 bg-gray-100">
    <Href url={url} link={link} newTab={newTab}>
      <Image src={image} alt={title} />
      <div className="text-antique-bronze text-center text-xl mt-4 mb-2">
        {title}
      </div>
    </Href>
  </div>
);

export default Card;
