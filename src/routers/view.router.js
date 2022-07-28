const express = require("express");
const router = express.Router();

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
router.get("/admin/quan-li-user", (req, res) =>
  res.render("pages/userManagement")
);
router.get("/admin/quan-li-caster", (req, res) =>
  res.render("pages/casterManagement")
);
router.get("/admin/quan-li-clb", (req, res) =>
  res.render("pages/clubManagement")
);
router.get("/admin/quan-li-giai", (req, res) =>
  res.render("pages/leagueManagement")
);
router.get("/admin/quan-li-phong", (req, res) =>
  res.render("pages/roomManagement")
);
router.get("/admin/quan-li-vai-tro", (req, res) =>
  res.render("pages/roleManagement")
);
router.get("/", (req, res) => {
  res.render("pages/home");
});
// router.use((err, req, res, next) => {
//   console.log('hello', err);
//   if (err.status === 404) res.redirect('/');
//   next();
// })

module.exports = router;
