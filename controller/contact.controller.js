const { getMongoClient } = require("./dbConfig");
const validator = require("validator");

const raiseTicket = async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  if (!validator.isEmail(email))
    return res.send({ statusCode: 400, message: "bad format" });
  const client = getMongoClient();
  const Email = client.collection("contact");
  const doc = await Email.insertOne({
    email: email,
    name: name,
    message: message,
  });
  if (doc) return res.send({ message: "success", statusCode: 200 });
  return res.send({ statusCode: 500, message: "failed" });
};

module.exports = { raiseTicket };
