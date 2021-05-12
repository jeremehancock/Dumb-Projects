import React from "react";

const Href = ({ children, url, alt, newTab = true, className }) => {
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
};

export default Href;
