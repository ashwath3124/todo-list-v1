const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

let newItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    // res.send("Hello");

    let today = new Date();
    let currentDay = today.getDay();
    // let day = "";

    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "WeekDay";
    // }

    /*
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            // day = "Wrong Input";
            console.log("Error: current day is equal to : " + currentDay);
            break;
    }
    */

    let day = date();

    res.render("list", { listTitle: day, newListItems: newItems });
});

// app.post("/", function (req, res) {
//     let newItem = req.body.newItem;
//     // console.log(newItem);

//     newItems.push(newItem);

//     res.redirect("/");
// });

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        newItems.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});

// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
