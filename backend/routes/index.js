const Router = require("express");
const adminRouter = require("./adminRouter.js");
const contactInfoRouter = require("./contactInfoRouter.js");
const orderRouter = require("./orderRouter.js");

const router = new Router();

router.use("/admin", adminRouter);
router.use("/contact_info", contactInfoRouter);
router.use("/order", orderRouter);

module.exports = router;
