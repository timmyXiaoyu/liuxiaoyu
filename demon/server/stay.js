var db = require('../db/db');
module.exports = {
    selRoom_Pos: function (req, res) {
        db.selectMore({tab1:'roomtype',tab2:'room',tab3:'position'},{id1:'roomtype_id',id2:'position_id',id3:'room_id'},function (e) {
            res.send(e);
        })
    },
}