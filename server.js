var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


app.use(express.static('public'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
    console.log("logged request to /");
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
    console.log("logged request to /about");
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
    console.log("logged request to /contact");
  res.sendFile(path + "contact.html");
});

router.get("/weather",function(req,res){
    console.log("logged request to /weather");
  res.sendFile(path + "weather.html");
});



app.use("/",router);

// app.use("*",function(req,res){
//   res.sendFile(path + "index.html");  
// });

app.listen(process.env.PORT,function(){
  console.log("Live at Port " + process.env.PORT);
  console.log("wundergroundkey: " + process.env.wundergroundkey);
});