import React from "react";
import Avatar from "./Avatar";
import Body from "./Body";
import Options from "./Options";
import Container from "../Container";

const STYLE = {
  display: "flex",
  alignItems: "center",
  inner: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

const Profile = ({ name, statement, onView }) => {
  return (
    <Container>
      <div style={STYLE}>
        <Avatar />
        <div className="inner" style={STYLE.inner}>
          <Body name={name} statement={statement} />
          <Options onView={onView} />
        </div>
      </div>
    </Container>
  );
};

export default Profile;
