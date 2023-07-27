const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var n = Number(req.body.num1);
    var m = Number(req.body.num2);
    var result = n + m;


    res.send("<h1>the sum is</h1>" + result);
});


app.listen(3000, function() {
    console.log("its also working");
});