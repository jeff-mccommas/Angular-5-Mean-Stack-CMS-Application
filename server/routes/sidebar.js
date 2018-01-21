var express = require('express');
var router = express.Router();

// Get Sidebar Model
var Sidebar = require('../models/sidebar');

/*
* GET edit sidebar
*/
router.get('/edit-sidebar', function (req, res) {

  var id = "5a648c7ea189a90239d06cd9";

  Sidebar.findById(id, function (err, sidebar) {
    if (err) console.log(err);
    res.json(sidebar);
  });
});

/*
* POST edit sidebar
*/
router.post('/edit-sidebar', function (req, res) {

  var id = "5a648c7ea189a90239d06cd9";

  Sidebar.findById(id, function (err, sidebar) {
    if (err) console.log(err);

    sidebar.content = req.body.content;

    sidebar.save(function (err) {
      if (err) {
        console.log(err);
        res.json("problem");
      } else {
        res.json("ok");
      }
    });
  });
});

// Exports
module.exports = router;
