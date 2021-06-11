const MongoClient = require("mongodb").MongoClient;

// Database Name
const dbConfig = {
  dbname: "renteefy_other",
  url: "mongodb://localhost:27017",
};

const client = new MongoClient(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Use connect method to connect to the server
const connectMongo = async () => {
  try {
    await client.connect();
    console.log("connected to mongo");
    return true;
  } catch (error) {
    return false;
  }
};
const getMongoClient = () => {
  return client.db(dbConfig.dbname);
};

module.exports = {
  connectMongo,
  getMongoClient,
};
