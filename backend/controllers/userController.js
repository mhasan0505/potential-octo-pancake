import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import UserModel from "../models/userModel.js";

// log in user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    const token = createToken(user._id);
    res.json({ success: true, message: "User logged in successfully", token });
  } catch (error) {}
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check if user already exists
    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validate email formast and password length
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }

    if (password.lemgth < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    //  hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ name, email, password: hashedPassword });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, message: "User created successfully", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to create user" });
  }
};

export { loginUser, registerUser };

