import Href from "../../href";
import React from "react";

const Tag = ({ tag, url, newTab }) => (
  <Href
    url={url}
    newTab={newTab}
    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 md:hover:bg-gray-700 md:hover:text-white mb-3 md:mb-0"
  >
    {tag}
  </Href>
);

export default Tag;
