const Router = require("express");
const OrderController = require("../controllers/orderController.js");
const router = new Router();

router.post("/", OrderController.send);

module.exports = router;
