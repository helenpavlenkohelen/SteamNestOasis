const Router = require("express");
const AdminController = require("../controllers/adminController.js");
const ContactInfoController = require("../controllers/contactInfoController.js");
const router = new Router();

// router.post("/register", AdminController.registration);
router.post("/login", AdminController.login);
router.get("/relogin", AdminController.reLogin);
router.put("/contact_info", ContactInfoController.update);

module.exports = router;
