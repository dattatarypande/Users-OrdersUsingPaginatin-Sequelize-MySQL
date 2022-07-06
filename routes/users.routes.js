var express = require('express');
const orderscontroller = require('../controller/userOrders.contoller');
var router = express.Router();

/* GET users listing. */
router.get('/', orderscontroller.getUsersWithOrders);

module.exports = router;
