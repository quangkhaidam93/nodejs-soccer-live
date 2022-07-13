function checkUsernameValue(username) {
  return !!username;
}

function checkPassword(password) {
  if (password.length < 10 || !password) {
    return false;
  }
  return true;
}

function submitLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // if (!checkUsernameValue(username) || !checkPassword(password)) return;
  signin(username, password);
}