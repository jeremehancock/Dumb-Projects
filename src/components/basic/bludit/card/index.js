import React from "react";
import Href from "../../href";
import Tag from "../tag";

const Card = ({ title, image, content, url, link, tags, newTab }) => (
  <Href url={url} link={link} newTab={newTab}>
    <div className="max-w-sm mx-5 md:mx-2 rounded overflow-hidden shadow-lg mb-10 md:mb-16 md:transition md:transform md:duration-200 md:hover:scale-105">
      <Href url={url} newTab={newTab}>
        {typeof image !== "object" ? (
          <img src={image} alt={title} className="w-full" />
        ) : (
          image
        )}
      </Href>
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2 hover:underline">
          {title}
        </div>
        {content && (
          <p className="text-gray-700 text-base ml-0 mb-0">{content}</p>
        )}
      </div>
      {tags && (
        <div className="px-6 py-4">
          {tags.split(",").map((tag, index) => (
            <Tag
              key={index}
              tag={`#${tag.toLowerCase()}`}
              url={`https://pilab.dev/tag/${tag
                .toLowerCase()
                .replace(" ", "-")}`}
              newTab={true}
            />
          ))}
        </div>
      )}
    </div>
  </Href>
);

export default Card;
