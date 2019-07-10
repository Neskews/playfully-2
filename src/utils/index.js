import { client, db, user } from "../db";

export const loadProfiles = async () => {
  try {
    await client.auth.loginWithCredential(user);
    return await db
      .collection("Profile")
      .find({}, { limit: 100 })
      .asArray();
  } catch (error) {
    console.log(error);
  }
};

export const removeProfile = async name => {
  try {
    await client.auth.loginWithCredential(user);

    return await db.collection("Profile").findOneAndDelete({ name });
  } catch (error) {
    console.log(error);
  }
};
