const express = require("express");
const app = express();
app.get("/", function(req, res) {
    res.send("<h1>divyanshu is Randi!!</h1>");

});


app.get("/contact", function(req, res) {
    res.send("im rishiChandara:-rishichandra1415@gmail.com");
});


app.get("/linkend", function(req, res) {
            res.send( < a href = "www.linkedin.com/feed/" > < /a>);
            });


        app.listen(3000, function() {

            console.log("divya");
        });