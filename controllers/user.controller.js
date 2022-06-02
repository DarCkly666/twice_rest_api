const User = require("../models/User.model.js");
const bcrypt = require("bcryptjs");
const createToken = require("../middlewares/createToken.js");

const getUser = (req, res) => {
  User.find({}, (err, users) => {
    if (err || !users) {
      return res.status(404).json({
        error: true,
        message: "Users not found",
      });
    }
    res.status(200).json(users);
  });
};

const getUserById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    res.status(200).json(user);
  });
};

const createUser = (req, res) => {
  const { body } = req;
  bcrypt.hash(body.password, 10, (err, hash) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "User not created",
      });
    }
    body.password = hash;
    const user = new User(body);
    user.save((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: true,
          message: "User not created",
        });
      }
      res.status(201).json({
        error: false,
        message: "User created",
      });
    });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (body.password) {
    bcrypt.hash(body.password, 10, (err, hash) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: "User not updated",
        });
      }
      body.password = hash;
    });
  }

  User.findByIdAndUpdate(id, body, (err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    res.status(200).json({
      error: false,
      message: "User updated",
    });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id, (err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    res.status(200).json({
      error: false,
      message: "User deleted",
    });
  });
};

const login = (req, res) => {
  const { body } = req;
  const { email, password } = body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err || !result) {
        return res.status(404).json({
          error: true,
          message: "User not found",
        });
      }
      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      };
      try {
        const token = await createToken(payload);
        res.status(200).json({
          error: false,
          message: "User found",
          token,
        });
        req.user = payload;
      } catch (err) {
        res.status(500).json({
          error: true,
          message: "User not found",
        });
      }
    });
  });
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
};
