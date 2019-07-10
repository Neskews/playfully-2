import React from "react";

const STYLE = {
  display: "flex",
  flexDirection: "column"
};

const Options = ({ onView }) => (
  <div style={STYLE}>
    <button>folgen</button>
    <button onClick={onView}>ansehen</button>
  </div>
);

export default Options;
