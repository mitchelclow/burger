// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// // GET method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// })

// // POST method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// })
























// const express = require('express');
// var router = express.Router();

// // router.get("/", function(req, res){
// //   res.render("home", {title:"yuck"})
// // })
// module.exports=router


// var express = require("express");

// var router = express.Router();

// // Import the model (cat.js) to use its database functions.

// // var cat = require("../models/cat.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     res.render("index");
// });

// // router.post("/", function(req, res) {
// //   cat.create([
// //     "name", "sleepy"
// //   ], [
// //     req.body.name, req.body.sleepy
// //   ], function() {
// //     res.redirect("/");
// //   });
// // });

// // router.put("/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   console.log("condition", condition);

// //   cat.update({
// //     sleepy: req.body.sleepy
// //   }, condition, function() {
// //     res.redirect("/");
// //   });
// // });

// // router.delete("/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   cat.delete(condition, function() {
// //     res.redirect("/");
// //   });
// // });

// // Export routes for server.js to use.
// module.exports = router;