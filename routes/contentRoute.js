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

const schemas = require("../handlers/contentValidation");
const validate = require("../middlewares/validate");

const { checkIfAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/content")
  .post(validate(schemas.contentSchema), checkIfAuthenticated, createContent);

router.route("/contents").get(checkIfAuthenticated, getContents);

router
  .route("/content/:id/season")
  .put(validate(schemas.addSeasonsSchema), checkIfAuthenticated, addSeason);

router
  .route("/content/:id/season/:seasonIndex/episode")
  .put(validate(schemas.addEpisodesSchema), checkIfAuthenticated, addEpisode);

router.route("/content/:id").get(checkIfAuthenticated, getContentDetail);

router
  .route("/content/:id")
  .patch(
    validate(schemas.updateContentSchema),
    checkIfAuthenticated,
    updateContent
  );

router.route("/content/:id").delete(checkIfAuthenticated, deleteContent);

module.exports = router;
