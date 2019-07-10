import React, { useState } from "react";
import { client, db, user } from "../db";

const AddProfile = () => {
  const [newProfile, setNewProfile] = useState({});

  const addProfile = newProfile => {
    client.auth
      .loginWithCredential(user)
      .then(() =>
        db
          .collection("Profile")
          .insertOne(newProfile)
          .then(console.log)
          .catch(console.error)
      )
      .then(() =>
        db
          .collection("Profile")
          .find({}, { limit: 100 })
          .asArray()
      )
      .then(console.log)
      .catch(console.error);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setNewProfile({ ...newProfile, [name]: value });
  };
  return (
    <div>
      <input type="text" name="name" placeholder="Name" onChange={onChange} />
      <input
        type="text"
        name="avatar"
        placeholder="Avatar"
        onChange={onChange}
      />
      <input
        type="text"
        name="statement"
        placeholder="Statement"
        onChange={onChange}
      />
      <button onClick={() => addProfile(newProfile)}>speichern</button>
    </div>
  );
};

export default AddProfile;
