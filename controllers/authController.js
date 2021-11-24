const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const admin = require("firebase-admin");
const db = require("../db");

exports.signupAdmin = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await admin.auth().createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

exports.signinAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await signInWithEmailAndPassword(getAuth(), email, password);

    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    await admin.auth().deleteUser(req.params.id);
    res.json({ message: "deleted successfully !" });
  } catch (error) {
    res.send(error.message);
  }
};
