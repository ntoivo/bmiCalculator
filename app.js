const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var BMI = Math.round((weight / (height ** 2)) * 10000);

    res.send ("<br><h1>Your BMI is " + BMI + "</h1>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});