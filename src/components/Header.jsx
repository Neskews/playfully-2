import React from "react";

const STYLES = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "4vh",
  borderBottom: "1px solid #ebebeb",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Header = () => (
  <>
    <div style={STYLES}>PLAYFULLY</div>
  </>
);

export default Header;
