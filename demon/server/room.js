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
    addPos: function (req, res) {
        db.insert('position', req.body, function (e) {
            res.send(e);
        })
    },
    addRoom: function (req, res) {
        db.insert('room', req.body, function (e) {
            res.send(e);
        })
    },
    searchRoom: function (req, res) {
        db.search('room', function (e) {
            res.send(e);
        })
    },
    selRoom_Pos: function (req, res) {
        db.selectMore({tab1:'roomtype',tab2:'room',tab3:'position'},{id1:'roomtype_id',id2:'position_id',id3:'room_id'},function (e) {
            res.send(e);
        })
    },
    selPage: function (req, res) {
        db.searchPage({tab1:'roomtype',tab2:'room',tab3:'position'},{id1:'roomtype_id',id2:'position_id',id3:'room_id'},function (e) {
            res.send(e);
        })
    },
    delType: function (req, res) {
        db.del('roomtype', req.body, function (e) {
            res.send(e);
        })
    },
    delRoom: function (req, res) {
        db.del('room', req.body, function (e) {
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
    selWhereRoom: function (req, res) {
        db.selectWhere('room', req.query, function (e) {
            res.send(e);
        })
    },
    updateType: function (req, res) {
        db.update('roomtype', req.body, function (e) {
            res.send(e);
        })
    },
    updateRoom: function (req, res) {
        db.update('room', req.body, function (e) {
            res.send(e);
        })
    },
    selPos: function (req, res) {
        db.search('position', function (e) {
            res.send(e);
        })
    },
}