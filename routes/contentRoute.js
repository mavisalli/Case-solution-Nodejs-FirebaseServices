const express = require("express");
const {
  createContent,
  getContents,
  getContentDetail,
  updateContent,
  deleteContent,
  addSeason,
  addEpisode,
} = require("../controllers/contentController");

const { checkIfAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/content").post(checkIfAuthenticated, createContent);

router.route("/contents").get(checkIfAuthenticated, getContents);

router.route("/content/:id/season").put(checkIfAuthenticated, addSeason);

router
  .route("/content/:id/season/:seasonIndex/episode")
  .put(checkIfAuthenticated, addEpisode);

router.route("/content/:id").get(checkIfAuthenticated, getContentDetail);

router.route("/content/:id").patch(checkIfAuthenticated, updateContent);

router.route("/content/:id").delete(checkIfAuthenticated, deleteContent);

module.exports = router;
