const Joi = require("joi");

const seasonsSchema = {
  seasonName: Joi.string().required(),
  episodes: Joi.array()
    .optional()
    .min(1)
    .items(
      Joi.object().keys({
        episodeName: Joi.string().required(),
      })
    ),
};

const contentSchema = Joi.object().keys({
  type: Joi.string().required().valid("movies", "tv_shows"),
  name: Joi.string().required(),
  description: Joi.string().required(),
  releaseYear: Joi.number().max(2021).required(),
  seasons: Joi.array().min(1).items(Joi.object(seasonsSchema)).optional(),
});

const addSeasonsSchema = Joi.array().items(
  Joi.object().keys({
    seasonName: Joi.string().required(),
  })
);

const addEpisodesSchema = Joi.array().items(
  Joi.object().keys({
    episodeName: Joi.string().required(),
  })
);

const updateContentSchema = Joi.object().keys({
  type: Joi.string().optional().valid("movies", "tv_shows"),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  releaseYear: Joi.number().max(2021).optional(),
  seasons: Joi.array().min(1).items(Joi.object(seasonsSchema)).optional(),
});

module.exports = {
  contentSchema,
  addSeasonsSchema,
  addEpisodesSchema,
  updateContentSchema,
};
