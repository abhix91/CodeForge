const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const connectToMongo = require("./Database/db.js");

require("dotenv").config();
const app = express();
connectToMongo(process.env.URL);

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
