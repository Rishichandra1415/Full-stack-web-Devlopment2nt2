const express = require("express");
// const parser = require("body-parser");
const bodyParser = require("body-parser"); // it is use for excess the data from thr body
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // it allow the exxes
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); // in this we can search the path using__dirname
});
app.post("/", function(req, res) { // bacically in this line we can  use use post method to remove the error404 and perform certain function by clicking the submit button..

    var num1 = Number(req.body.num1); // in this we can req the body in num1
    var num2 = Number(req.body.num2);

    var sum = num1 + num2;
    res.send("the sum is " + sum); // in his we can print the variable
});

app.get("/bmiCalc", function(req, res) {

    res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmiCalc", function(req, res) {
    var weight = float(req.body.weight);
    var height = float(req.body.height);

    var bmi = float(weight / height * height);
    res.send("Your Bdy MassIndex" + bmi);
});



app.listen(3000, function() {
    console.log("working.....")
});