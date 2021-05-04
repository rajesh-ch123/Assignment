require('./models/db');

const express = require('express');;
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);