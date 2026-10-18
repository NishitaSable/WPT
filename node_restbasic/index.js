var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.static("public"));

// app.get('/listUser',function(req,res){
//      fs.readFile(__dirname+"/"+"ejson.json",'utf8',function(err,data){
//         console.log(data)
//         res.end(data)
//     })
// })



// app.get("/:code", function (req, res) {
//   fs.readFile(__dirname + "/" + "ejson.json", "utf8", function (err, data) {
//     var users = JSON.parse(data);
//     var user = users.find(function (u) {
//       return u.code === req.params.code;
//     });
//     console.log(user);
//     if (user) {
//       res.end(JSON.stringify(user));
//     } else {
//       res.status(404).end("User not found");
//     }
//   });
// });



// app.get('/',function(req,res){
// console.log("Got a GET request for the homepage");
// res.send('Hello GET');
// })



// app.post('/',function(req,res){
// console.log("Got a POST request for the homepage");
// res.send('Hello POST');
// })



// app.delete('/del_user',function(req,res){
// console.log("Got a DELETE request for /del_user");
// res.send('Hello DELETE');
// })



// app.get('/list_user',function(req,res){
// console.log("Got a GET request for /list_user");
// res.send('Page Listing');
// })



// app.get('/ab*cd',function(req,res){
// console.log("Got a GET request for /ab*cd");
// res.send('Page Pattern Match');
// })



// //get form
// app.get('/getform',function(req,res){
//   res.sendFile(__dirname+"/"+"index.html")
// })
// app.get('/process_get',function(req,res){
//   response = {
//     first_name:req.query.first_name,
//     last_name:req.query.last_name
//   };
//   console.log(response)
//   res.end(JSON.stringify(response))
// })



// //post form
// app.use(express.urlencoded({ extended: false }));
// app.get("/postdata", function (req, res) {
//   res.sendFile(__dirname + "/" + "post.html");
// });
// app.post("/process_post", function (req, res) {

//   response = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });



app.use(express.json());
app.get("/postjson", function (req, res) {
  res.sendFile(__dirname + "/" + "formjson.html");
});
app.post("/process_post", function (req, res) {
  response = {
    first_name: req.body.firstname,
    last_name: req.body.lastname,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});




var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
