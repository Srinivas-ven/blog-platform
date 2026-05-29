const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      where: { email }
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email }
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password"
      });

    }

    res.status(200).json({
      message: "Login successful",
      user
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};