const express = require("express");
const router = express.Router();
const { checkAuthenticationWeb } = require("./../utils/supportedFunction");

router.get('/test', (req, res) => res.render("pages/test"));
router.get('/', (req, res) => res.render("pages/home"));
router.get('/lich-truc-tiep', (req, res) => {
  res.render("pages/livestreamSchedule")
});
router.get('/highlights', (req, res) => res.render("pages/highlights"));
router.get('/admin/login', (req, res) => res.render("pages/loginAdmin"));
router.get('/admin/quan-li-user', (req, res) => res.render("pages/userManagement"));
router.get('/chat', (req, res) => res.render("chat"));
router.get('/admin', (req, res) => {
  res.redirect("admin/login");
  // const loginToken = localStorage.getItem('token');
  // if (loginToken) {
  //   res.redirect("admin/quan-li-user");
  // } else {
  // }
});

module.exports = router;