import * as edgedb from "edgedb";

declare global {
  var __db: edgedb.Client;
}

let db: edgedb.Client;

if (process.env.NODE_ENV === "production") {
  db = edgedb.createClient();
} else {
  if (!global.__db) {
    global.__db = edgedb.createClient();
  }
  db = global.__db;
}

export { db };
