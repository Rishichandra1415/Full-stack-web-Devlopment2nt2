const express = require("express");
const bodypaser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodypaser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");


});


app.post("/", function(req, res) {
    var firstName = req.body.fname;
    var lasttName = req.body.lname;
    var emall = req.body.em;
    console.log(firstName, lasttName, emall);
});


app.listen(3000, function() {
    console.log("server is running");
});



//api key..
//e19b0257df97123905792ec6009f020a-us21