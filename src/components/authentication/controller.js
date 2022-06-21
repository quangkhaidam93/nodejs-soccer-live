require('dotenv').config();

const signInController = (req, res) => {
  const username = req.body['username'];
  const password = req.body['password'];
  if (!username || !password) res.send({error: 'Fucked!'}); // TODO: Format response
  console.log('Im here');
  res.status(200).send();
}

module.exports = {
  signInController,
}