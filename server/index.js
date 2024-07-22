const express = require("express");
const cors = require("cors");


require("dotenv").config();
const app = express();


app.use(cors());
app.use(express.json());



app.post('/compile', (req, res) => {
  const { code, input, language } = req.body;

  let result;
  try {
    switch (language) {
      case 'cpp':
        result = compileCpp(code, input);
        break;
      case 'java':
        result = compileJava(code, input);
        break;
      case 'c':
        result = compileC(code, input);
        break;
      case 'python':
        result = compilePy(code, input);
        break;
      default:
        return res.status(400).json({ error: 'Unsupported language' });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
