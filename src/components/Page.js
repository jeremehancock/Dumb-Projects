import React from "react";

import logo from "@/images/dumb.png";

const Page = ({ children, title, alt, link, linkTitle }) => (
  <div>
    <div className="logo"><img src={logo} alt={alt} /></div>
    <div className="tagline">{title}
      <a href={link} target="_blank" rel="noreferrer">{linkTitle}</a>.
    </div>
    <div className="flex-container">{children}</div>
    <div id="social">
      <div>
        <a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fdumbprojects.com%2F&amp;linkname=" target="_blank" rel="noreferrer"><img src="https://static.addtoany.com/buttons/facebook.svg" style={{background: 'royalblue', width: 32, height: 32, marginRight: 5}} alt="Facebook"/></a>
        <a href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fdumbprojects.com%2F&amp;linkname=" target="_blank" rel="noreferrer"><img src="https://static.addtoany.com/buttons/twitter.svg" style={{background: '#1DA1F2', width: 32, height: 32}} alt="Twitter" /></a>
      </div>
    </div>
  </div>

);

export default Page;
