const express = require("express");
const bodyparser = require("body-parser");
// in this we can require the file name using...
const date = require(__dirname + "/date.js");// all the data is store in the date variable means that->all the function are store 
const app = express();
let itms = ["Eat", "Sleep", "Eat"];
let workItem = [];
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date();// in this we can call the function and store in  the day variable and next all teh process are same

    res.render("list", { kay: day, newListItems: itms });

});
app.get("/work", function(req, res) {
    res.render("list", { kay: "WorkList", newListItems: workItem });

})

// post method  is use to form mai apnn joo bhi input diye hai woo server m jaka print krega home route mai
app.post("/", function(req, res) {
    // console.log(req.body);
    let itm = req.body.Item;
    // let ite = req.body.workItem;

    if (req.body.List === "WorkList") {
        workItem.push(itm);

        res.redirect("/work");
    } else {
        itms.push(itm);
        // its is use to redirect  the  home page..
        res.redirect("/");
    }

});


// app.post("/work", function(req, res) {
//     res.redirect("/work");
// })

app.listen(3000, function() {
    console.log("workingg");
});