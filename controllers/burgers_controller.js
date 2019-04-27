var express = require("express");
var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    })
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId,
        });
        console.log(req.body);
    });
});


router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition:", condition);
    console.log("Body: " + req.body.devoured);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            console.log(result);

            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

module.exports = router;