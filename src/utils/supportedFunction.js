function checkAuthenticationWeb(route) {
  const loginToken = localStorage.getItem('token');
  if (loginToken) {
    res.render(route);
  } else {
    res.redirect("admin/login");
  }
}

module.exports = {
  checkAuthenticationWeb
}