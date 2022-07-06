var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db= require('./model/index');

var usersRouter = require('./routes/users.routes');
const ordersRouter= require('./routes/orders.routes');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// db.sequelize.sync({force: true});
 db.sequelize.sync();
app.get('/',(req,res) =>{
    res.send("Welcome");
});
app.use('/orders',ordersRouter);
app.use('/users', usersRouter);

module.exports = app;
