import React from "react";
import Href from "../../../basic/href";

const Page = ({ children, title, url, link, linkTitle, newTab, social = true }) => (
  <div>
    {title && (
      <div className="text-3xl mb-14 md:mb-10 mt-10 md:mt-0 md:ml-10 text-center md:text-left">
        {title}
        <Href url={url} link={link} newTab={newTab} className="hover:underline">
          {linkTitle}
        </Href>
        .
      </div>
    )}
    <div className="flex flex-wrap justify-evenly">{children}</div>
  </div>
);

export default Page;
