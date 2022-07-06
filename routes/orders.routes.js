var express = require('express');
const orderscontroller = require('../controller/userOrders.contoller');
var router = express.Router();


router.get('/', orderscontroller.getOrdersByUserId);

module.exports = router;