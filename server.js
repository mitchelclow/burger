// Requiring npm packages
var express = require('express');

var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');

var inquirer = require('inquirer');

var path = require('path');

var mysql = require('mysql')

var homeRouter = require('./controllers/home.js');

var app = express();
var port = process.env.PORT || 3000
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.engine("handlebars", exphbs({
  defaultLayout: 'main'
}));
app.set("view engine", "handlebars");
// app.use(express.static('views'));
app.use("/", homeRouter);
app.listen(port, function(){
  console.log("server listening on " + port);
})

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'waterbottle',
  database : 'burgers_db'
});

// Host: codeflink.net
// Username: mitchclow
// Password: bPEoSo5ObbY7
// Database: mitchclow

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()