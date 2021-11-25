const express = require("express");
const {
  signupAdmin,
  signinAdmin,
  deleteAdmin,
} = require("../controllers/authController");

const schemas = require("../handlers/authValidation");
const validate = require("../middlewares/validate");

const router = express.Router();

router.route("/signup").post(validate(schemas.signUpSchema), signupAdmin);
router.route("/signin").post(signinAdmin);
router.route("/delete/:id").delete(deleteAdmin);

module.exports = router;
