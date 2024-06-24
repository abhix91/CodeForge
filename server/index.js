const express = require("express");
const cors = require("cors");

const connectToMongo = require("./Database/db.js");
const errorHandler = require("./middleware/errorHandler.js");

require("dotenv").config();
const app = express();
connectToMongo(process.env.URL);

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/userRoutes.js"));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
