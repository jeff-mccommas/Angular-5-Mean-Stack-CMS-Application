var express = require('express');
var router = express.Router();

// Get User Model
var User = require('../models/user');

/*
* POST register
*/
router.post('/register', function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username }, function (err, user) {
        if (err) console.log(err);

        if (user) {
            res.json("userExists");
        } else {
            var user = new User({
                username: username,
                password: password
            });

            user.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json("userRegistered");
                }
            });
        }
    });
});

/*
* POST login
*/
router.post('/login', function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username, password: password }, function (err, user) {
        if (err) console.log(err);

        if (user) {
            res.json(username);
        } else {
            res.json("invalidLogin");
        }
    });
});

// Exports
module.exports = router;