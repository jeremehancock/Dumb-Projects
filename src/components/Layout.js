import React from "react";

import layoutStyles from "@/components/layout.modules.scss";

const Layout = ({ children }) => {
  return <div className={`dumbprojects ${layoutStyles}`}>{children}</div>;
};

export default Layout;
