const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

var items = ["initial items"];

app.get("/", function (req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-IN", options)

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    })
})

app.post("/", function (req, res) {
    var newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");

})

app.listen(3000, function () {
    console.log("server statrted on port 3000");
})