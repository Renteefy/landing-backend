const { getMongoClient } = require("./dbConfig");
const storeSurvey = async (req, res) => {
  const client = getMongoClient();
  const Survey = client.collection("survey");

  const doc = await Survey.insertOne({
    data: req.body.data,
  });
  if (doc.result.ok === 1) return res.send({ status: "ok", statusCode: 200 });
  res.send({ status: "not ok", statusCode: 400 });
};
module.exports = { storeSurvey };
