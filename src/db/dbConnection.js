/** @format */

const mongoose = require("mongoose");
const dbUrl = process.env.DATABASE_CONNECTION_URL;
const dbName = process.env.DATABASE_NAME;

const dbConnection = async () => {
  await mongoose.connect(`${dbUrl}/${dbName}`, {
    serverSelectionTimeoutMS: 1000,
  });
  console.log("Database connected");
};
module.exports = dbConnection;
