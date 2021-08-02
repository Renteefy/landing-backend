const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const { contactRouter } = require("./router/contact.router");
const { emailRouter } = require("./router/email.router");
const { surveyRouter } = require("./router/survey.router");
const { connectMongo } = require("./controller/dbConfig");
connectMongo();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 40,
});

const app = express();
app.use(morgan("dev"));
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use("/email", apiLimiter, emailRouter);
app.use("/contact", apiLimiter, contactRouter);
app.use("/survey", apiLimiter, surveyRouter);

app.get("/", (req, res) => {
  res.send("Server online");
});

module.exports = { app };
