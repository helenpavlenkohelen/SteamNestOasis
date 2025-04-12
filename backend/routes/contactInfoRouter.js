const Router = require("express");
const ContactInfoController = require("../controllers/contactInfoController.js");
const router = new Router();

router.get("/", ContactInfoController.getAll);

module.exports = router;
