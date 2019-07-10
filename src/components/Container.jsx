import React from "react";

const STYLE = {
  border: "1px solid #ebebeb",
  margin: "6px 0",
  padding: "6px 12px"
};

const Container = ({ children }) => <div style={STYLE}>{children}</div>;

export default Container;
