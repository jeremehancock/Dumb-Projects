import React from "react";
import Href from "../../basic/href";

const Page = ({ children, logo, title, url, link, linkTitle, newTab, social = true }) => (
  <div>
    {logo && <div className="logo">{logo}</div>}
    {title && (
      <div className="tagline">
        {title}
        <Href url={url} link={link} newTab={newTab}>
          {linkTitle}
        </Href>
        .
      </div>
    )}
    <div className="flex-container">{children}</div>
    {social && (
      <div className="social">
        <div className="flex justify-center">
          <Href url="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fdumbprojects.com%2F&amp;linkname=">
            <img
              src="https://static.addtoany.com/buttons/facebook.svg"
              style={{
                background: "royalblue",
                width: 32,
                height: 32,
                marginRight: 5,
              }}
              alt="Facebook"
            />
          </Href>
          <Href url="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fdumbprojects.com%2F&amp;linkname=">
            <img
              src="https://static.addtoany.com/buttons/twitter.svg"
              style={{ background: "#1DA1F2", width: 32, height: 32 }}
              alt="Twitter"
            />
          </Href>
        </div>
      </div>
    )}
  </div>
);

export default Page;
