const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index", function(req, res) {

    var n = Number(req.body.num1);
    var m = Number(req.body.num2);

    var result = Number(n + m);
    res.send("the sum is " + result);


});




app.listen(3000, function() {
    console.log("working");
});