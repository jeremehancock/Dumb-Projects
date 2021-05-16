import React from "react";
import Href from "../../../basic/href";

const Page = ({ children, title, url, link, linkTitle, newTab, social = true }) => (
  <div>
    {title && (
      <div className="text-gray-700 text-3xl mb-14 md:mb-10 mt-10 md:mt-0 text-center md:text-left">
        {title}
        <Href url={url} link={link} newTab={newTab} className="text-gray-700 md:hover:underline">
          {linkTitle}
        </Href>
        .
      </div>
    )}
    <div className="flex flex-wrap justify-evenly">{children}</div>
  </div>
);

export default Page;
