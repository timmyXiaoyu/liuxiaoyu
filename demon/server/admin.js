var db = require('../db/db');
module.exports = {
    add: function (req, res) {
        db.insert('admin', req.body, function (e) {
            res.send(e);
        })
    },
    select: function (req, res) {
        db.search('admin', function (e) {
            res.send(e);
        })
    },
}