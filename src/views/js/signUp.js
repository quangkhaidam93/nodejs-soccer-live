function checkUsernameValue(username) {
  return !!username;
}

function checkPassword(password, confirmPW) {
  if (password.length < 10 || !password) {
    alert("Mật khẩu phải hơn 10 kí tự");
    return false;
  }
  if (password !== confirmPW) {
    alert("Mật khẩu và mật khẩu xác nhận không khớp nhau");
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
    signup(username, password, nickname)
    .then(res => {
      window.location.href = '/admin/quan-li-user'; 
    })
    .catch(err => {
      alert('Đăng kí thất bại, vui lòng thử lại');
    });
  }
  return
}