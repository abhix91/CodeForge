const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/error");
const SECRET = process.env.SECRET;

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailCheck = await User.findOne({ email });
 // console.log(emailCheck);
  if (emailCheck) {
    
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Email Already Exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
  });
  console.log(user);
  const token = jwt.sign({ id: user.id }, SECRET);
  return res.status(200).json({
    message: "Registered Successfully",
    status: true,
    user,
    token: token,
  });
};

const Login = async (req, res) => {
  const { username, password } = req.body;

  const isUserValid = await User.findOne({ username });
  if (!isUserValid) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "User Does Not Exist Kindly Register",
    });
  }

  const isPasswordvalid = await bcrypt.compare(password, isUserValid.password);
  if (!isPasswordvalid) {
    throw new AppError({
      name: "UNAUTHORIZED",
      message: "Invalid Credentials",
    });
  }
  const token = jwt.sign({ id: isUserValid.id }, SECRET);
  return res.json({
    message: "Login Successfull",
    status: true,
    isUserValid,
    token: token,
  });
};

module.exports = {
  register,
  Login,
};
