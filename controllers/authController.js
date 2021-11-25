const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const admin = require("firebase-admin");
const db = require("../db");
var bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signupAdmin = async (req, res) => {
  try {
    const {
      email,
      password,
      phoneNumber,
      photoUrl,
      firstName,
      lastName,
      birthDay,
    } = req.body;

    const user = await admin.auth().createUser({
      email,
      password,
      photoUrl,
      phoneNumber,
      displayName: `${firstName} ${lastName}`,
    });

    if (user) {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        await db.collection("admins").doc(user.uid).create({
          email,
          firstName,
          lastName,
          phoneNumber,
          password: hash,
          birthDay,
        });
      });
    }

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
