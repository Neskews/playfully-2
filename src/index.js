import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { client, db, user } from "./db";

ReactDOM.render(<App />, document.getElementById("root"));

client.auth
  .loginWithCredential(user)
  .then(user =>
    db
      .collection("Profile")
      .updateOne(
        { owner_id: client.auth.user.id },
        { $set: { number: 42 } },
        { upsert: true }
      )
  )
  .then(() =>
    db
      .collection("Profile")
      .find({ owner_id: client.auth.user.id }, { limit: 100 })
      .asArray()
  )
  .then(docs => {
    // console.log("Found docs", docs);
    // console.log("[MongoDB Stitch] Connected to Stitch");
  })
  .catch(err => {
    // console.error(err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
