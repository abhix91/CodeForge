const mongoose = require("mongoose");

const connectToMongo = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
    console.log("Database not connected");
  }
};

module.exports = connectToMongo;
