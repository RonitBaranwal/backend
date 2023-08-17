const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "Notable";
const client = new MongoClient(url);

module.exports = dbConnect = async () => {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("notes");
};
