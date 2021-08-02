const surveyRouter = require("express").Router();
const { storeSurvey } = require("../controller/survey.controller.js");
surveyRouter.post("/storeSurvey", storeSurvey);

module.exports = { surveyRouter };
