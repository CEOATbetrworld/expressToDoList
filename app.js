const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
    var date = new Date();
    if (date.getDay() == 0) {
        res.send("yey today is sunday")
    } else {
        res.sendFile(__dirname + "/index.html");
    }
})

app.listen("3000", function () {
    console.log("Server started on port 3000");
})