var mongoose = require('mongoose');

// Page Schema
var PageSchema = mongoose.Schema({
   
    title: {
        type: String
    },
    slug: {
        type: String
    },
    content: {
        type: String
    },
    sidebar: {
        type: String
    },

});

var Page = module.exports = mongoose.model("Page", PageSchema);