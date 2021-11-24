const express = require("express");
const {
  signupAdmin,
  signinAdmin,
  deleteAdmin,
} = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signupAdmin);
router.route("/signin").post(signinAdmin);
router.route("/delete/:id").delete(deleteAdmin);

module.exports = router;
