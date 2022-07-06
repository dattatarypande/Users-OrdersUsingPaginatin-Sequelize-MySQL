const db = require('../model/index');
const users = db.users;
const orders = db.orders;
const sequelize = db.sequelize;
module.exports = {
    getOrdersByUserId: (req, res) => {

        var pageNmber = parseInt(req.query.page);//1
        var numberofRows = parseInt(req.query.limit);//10
        var offset = (pageNmber - 1) * numberofRows;
        var fetchrow = numberofRows;
        users.findAndCountAll({
            where: { id: req.query.user_id }, include: { model: orders, attributes: ['Order_id', 'Product_name', 'Status', 'Created_date'] },
            offset: offset, limit: fetchrow
        }).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
    },
    getUsersWithOrders: (req, res) => {
        var pageNmber = parseInt(req.query.page);//1
        var numberofRows = parseInt(req.query.limit);//10
        var offset = (pageNmber - 1) * numberofRows;
        var fetchrow = numberofRows;
        users.findAndCountAll({
            include: { model: orders, attributes: ['Order_id', 'Product_name', 'Status', 'Created_date'] },
            offset: offset, limit: fetchrow, distinct: true
        }).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
    }

}
