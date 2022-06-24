require("dotenv").config();
const User = require("../../models/user.model");

let counter = 0;

const signInController = async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];
  if (!username || !password) res.send({ error: "Fucked!" }); // TODO: Format response
  console.log("Im here");

  const user = new User({
    username: username,
    password: password,
    nickname: counter + 100,
  });
  const result = await user.save();
  counter++;
  console.log(result);
  console.log('hihi haha hichic aloalo ok yeah hehe');
  res.status(200).send(result);
};

const signUpController = async (req, res) => {
  const results = await User.findAll();
  console.log(results);
  res.status(200).send(results);
};

module.exports = {
  signInController,
  signUpController,
};
