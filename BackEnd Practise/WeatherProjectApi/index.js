const { log } = require("console");
const express = require("express");
const https = require("http");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {

    const query = req.body.cityName;
    const unit = "metric";
    const apikey = "5824f2ad4c9418f41164e05388442c21";
    https.get("http://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit, function(response) {

        console.log(response.statusCode);
        response.on("data", function(data) { //data refer to kiska dta apnn ko show krna hai .. uprr mai statuscode ka hai tho wahi show krna hai..
            const weatherData = JSON.parse(data); // In this JSON.parase is used to change the format into js view 
            const temp = weatherData.main.temp; // simple yha pai apnn temp ka path  store kiye hai..
            // console.log(temp);
            const des = weatherData.weather[0].description; // yha pai description ka..
            // console.log(des);
            const icon = weatherData.weather[0].icon;
            const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The Weather Is Currently" + " " + des + "</p>");
            res.write("<h1>The Temperature In " + query + " is  " + temp + "Degree Celcius</h1>");
            res.write("<img src=" + iconUrl + ">");
            res.send();
        })
    })

})


/



app.listen(3000, function() {
    console.log("rishi is best=>");
});