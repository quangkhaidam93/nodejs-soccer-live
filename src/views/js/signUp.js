function checkUsernameValue(username) {
  return !!username;
}

function checkPassword(password, confirmPW) {
  if (password.length < 10 || !password) {
    alert("Please input password");
    return false;
  }
  if (confirmPW.length < 10 || !confirmPW) {
    alert("Please input confirm password");
    return false;
  }
  if (password !== confirmPW) {
    alert("Password and confirm password is not match");
    return false;
  }
  return true;
}

function submitSignUp() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPW = document.getElementById("confirm__password").value;
  const nickname = document.getElementById("nickname").value;
  if (checkUsernameValue(username) && checkPassword(password, confirmPW)) {
    signup(username, password, nickname);
  }
  return
}