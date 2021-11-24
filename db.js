const admin = require("firebase-admin");
const firebase = require("firebase/app");
const config = require("./config");

admin.initializeApp({
  credential: admin.credential.cert(config.firebaseAdminConfig),
  databaseURL: "https://case-solution.firebaseio.com",
});

firebase.initializeApp(config.firebaseConfig);

const db = admin.firestore();

module.exports = db;
