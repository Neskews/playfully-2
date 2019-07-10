const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require("mongodb-stitch-browser-sdk");

export const client = Stitch.initializeDefaultAppClient("playfully-vfjkb");

export const db = client
  .getServiceClient(RemoteMongoClient.factory, "playfully-cluster")
  .db("Playfully");

export const user = new AnonymousCredential();
