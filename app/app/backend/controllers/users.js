const User = require("../models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// This controller is used to send details of all users.
exports.getAllUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user,
  });
};

// This controller is used to create a user in the database.
exports.signup = async (req, res) => {
  const { user_name, email } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    user_name,
    email,
    password,
    profilepic: {
      publicurl: "Sample_img",
      url: "ample_Url",
    },
  });
};

// This controller is used to send a jwt token to user.
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: `${email}` });
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    const payload = {
      user_id: user._id,
    };
    const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
    res.send({ jwtToken });
  } else {
    res.status(400);
    res.send("Invalid Password!!!");
  }
};
