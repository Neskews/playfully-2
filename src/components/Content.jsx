import React from "react";

const STYLES = {
  width: "60vw",
  margin: "4vw auto"
};

const Content = ({ children }) => <div style={STYLES}>{children}</div>;

export default Content;
