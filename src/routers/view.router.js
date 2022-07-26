const express = require("express");
const router = express.Router();
const { canAccessAdminPage } = require("../middlewares/authJwt");

router.get("/test", (req, res) => res.render("pages/test"));
router.get("/highlights", (req, res) => res.render("pages/highlights"));
router.get("/lich-truc-tiep", (req, res) => {
  res.render("pages/livestreamSchedule");
});
router.get("/:roomId", (req, res) => {
  res.render("pages/livestreamRoom");
});

router.get("/chat", (req, res) => {
  res.render("chat");
});
router.get("/admin", (req, res) => {
  res.redirect("admin/login");
});
router.get("/admin/login", (req, res) => res.render("pages/loginAdmin"));
router.get("/admin/sign-up", (req, res) => res.render("pages/signUpAdmin"));
router.get("/admin/quan-li-user", [canAccessAdminPage], (req, res) =>
  res.render("pages/userManagement")
);
router.get("/admin/quan-li-caster", [canAccessAdminPage], (req, res) =>
  res.render("pages/casterManagement")
);
router.get("/admin/quan-li-clb", [canAccessAdminPage], (req, res) =>
  res.render("pages/clubManagement")
);
router.get("/admin/quan-li-giai", [canAccessAdminPage], (req, res) =>
  res.render("pages/leagueManagement")
);
router.get("/admin/quan-li-phong", [canAccessAdminPage], (req, res) =>
  res.render("pages/roomManagement")
);
router.get("/admin/quan-li-vai-tro", [canAccessAdminPage], (req, res) =>
  res.render("pages/roleManagement")
);
router.get("/", (req, res) => {
  console.log("Hello World");
  res.render("pages/home");
});
// router.use((err, req, res, next) => {
//   console.log('hello', err);
//   if (err.status === 404) res.redirect('/');
//   next();
// })

module.exports = router;
