import React from "react";

const STYLE = {
  display: "flex",
  flexDirection: "column",
  statement: {
    color: "#ababab"
  }
};

const Body = ({ name, statement }) => (
  <div style={STYLE}>
    <span>{name}</span>
    <span style={STYLE.statement}>{statement}</span>
  </div>
);

export default Body;
