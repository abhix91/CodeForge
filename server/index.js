const express = require("express");
const cors = require("cors");

const connectToMongo = require("./Database/db.js");
const errorHandler = require("./middleware/errorHandler.js");
const { compileCpp, compileJava, compileC, compilePy } = require('./compile');

require("dotenv").config();
const app = express();
connectToMongo(process.env.URL);

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/userRoutes.js"));
app.use(errorHandler);


app.post('/compile', (req, res) => {
  const { code, input, language } = req.body;

  switch (language) {
      case 'cpp':
          const cppResult = compileCpp(code, input);
          res.json(cppResult);
          break;
      case 'java':
          const javaResult = compileJava(code, input);
          res.json(javaResult);
          break;
      case 'c':
          const cResult = compileC(code, input);
          res.json(cResult);
          break;
      case 'python':
          const pythonResult = compilePy(code, input);
          res.json(pythonResult);
          break;
      default:
          res.status(400).json({ error: 'Unsupported language' });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
