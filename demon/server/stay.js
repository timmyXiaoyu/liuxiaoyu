var db = require('../db/db');
module.exports = {
    selRoom_Pos: function (req, res) {
        db.selectMore({tab1:'roomtype',tab2:'room',tab3:'position'},{id1:'roomtype_id',id2:'position_id',id3:'room_id'},function (e) {
            res.send(e);
        })
    },
    addUser: function (req, res) {
        db.insert('custom', req.body, function (e) {
            res.send(e);
        })
    },
    addOrderList:function (req, res) {
        db.insert('orderlist', req.body, function (e) {
            res.send(e);
        })
    },
    selList_People: function (req, res) {
        db.selectFour({tab1:'custom',tab2:'orderlist',tab3:'room',tab4:'roomtype'},{id1:'custom_id',id2:'room_id',id3:'orderlist_id',id4:'roomtype_id'},function (e) {
            res.send(e);
        })
    },
}