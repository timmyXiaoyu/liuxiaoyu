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
    addPrice: function (req, res) {
        db.insert('price', req.body, function (e) {
            res.send(e);
        })
    },
    selType_Price: function (req, res) {
        db.selectMore({tab1:'roomtype',tab2:'price'},{id1:'roomtype_id',id2:'roomtype_id'},function (e) {
            res.send(e);
        })
    },
    selPage: function (req, res) {
        db.searchPage({tab1:'roomtype',tab2:'price'},{id1:'roomtype_id',id2:'roomtype_id'},function (e) {
            res.send(e);
        })
    },
}