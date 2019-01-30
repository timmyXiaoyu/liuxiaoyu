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
    selRoom_Pos: function (req, res) {
        db.selectMore({tab1:'room',tab2:'position'},{id1:'pos_id',id2:'pos_id'},function (e) {
            res.send(e);
        })
    },
    selPage: function (req, res) {
        db.searchPage({tab1:'room',tab2:'position'},{id1:'pos_id',id2:'pos_id'},function (e) {
            res.send(e);
        })
    },
    delType: function (req, res) {
        db.del('roomtype', req.body, function (e) {
            res.send(e);
        })
    },
    delPos: function (req, res) {
        db.del('position', req.body, function (e) {
            res.send(e);
        })
    },
    selWhere: function (req, res) {
        db.selectWhere('roomtype', req.query, function (e) {
            res.send(e);
        })
    },
    updateType: function (req, res) {
        db.update('roomtype', req.body, function (e) {
            res.send(e);
        })
    },
    
}