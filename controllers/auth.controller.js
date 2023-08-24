const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const secret = "xyz@niu3h2!";
const { User } = require("../models");

async function addUser({ username, email, password }) {
  let added = await User.create({
    username,
    email,
    password: bcrypt.hashSync(password, salt),
  });
  return added;
}

async function findUser({ email, password }) {
  let res = await User.findOne({ email });
  let passOk = bcrypt.compareSync(password, res.password);

  if (passOk) {
    return res;
  } else {
    return "Wrong Creds!";
  }
}

async function getToken({ email, password }) {
  let res = await User.findOne({ email });
  let user = res.toJSON();

  if (user.password) {
    delete user.password;
  }

  let x = jwt.sign(user, secret);
  return x;
}

async function verifyToken(token) {
  let x = jwt.verify(token, secret);
  return x;
}

module.exports = { addUser, findUser, getToken, verifyToken };
