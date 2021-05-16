import React from "react";
import { Link } from "gatsby";

const Href = ({ children, url, link, alt, newTab = true, className }) => {
  if (link) {
    return <Link to={link} className={className}>{children}</Link>;
  } else {
    return newTab ? (
      <a
        href={url}
        className={className}
        alt={alt}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ) : (
      <a href={url} className={className} alt={alt}>
        {children}
      </a>
    );
  }
};

export default Href;
