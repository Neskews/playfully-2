import React from "react";
import Documents from "./Documents";
import { removeProfile, loadProfiles } from "../utils";

const User = ({ profile: { name, statement, documents }, goToOverview }) => {
  const remove = () =>
    removeProfile(name)
      .then(loadProfiles)
      .then(goToOverview);

  return (
    <>
      <div>{name}</div>
      <div>{statement}</div>
      <Documents Documents />
      <button onClick={() => goToOverview()}>Übersicht</button>
      <button onClick={() => remove()}>Profil löschen</button>
    </>
  );
};

export default User;
