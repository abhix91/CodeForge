const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: user.id }, SECRET);
    return res.json({ status: true, user, token: token });
  } catch (err) {
    console.log(err.message);
  }
};

const SignIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUserValid = await User.findOne({ username });
    if (!isUserValid) {
      return res.json({ msg: "Invalid username or password", status: false });
    }

    const isPasswordvalid = await bcrypt.compare(
      password,
      isUserValid.password
    );
    if (!isPasswordvalid) {
      return res.json({ msg: "Invalid username or Password", status: false });
    }
    const token = jwt.sign({ id: isUserValid.id }, SECRET);
    return res.json({ status: true, isUserValid, token: token });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  SignUp,
  SignIn,
};
