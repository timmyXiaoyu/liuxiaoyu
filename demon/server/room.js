var db = require('../db/db');
module.exports = {
    addType: function (req, res) {
        db.insert('roomtype', req.body, function (e) {
            res.send(e);
        })
    },
    searchType: function (req, res) {
        db.search('roomtype', function (e) {
            res.send(e);
        })
    },
}