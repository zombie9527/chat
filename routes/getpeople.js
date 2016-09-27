var express = require('express');
var router = express.Router();
var clientHandler = require('../netchat');

router.get('/',function(req,res,next){
    console.log('there is get people');
    var list=[];
    var peos = clientHandler.getList();

    for(var i=0;i<peos.length;i++){
        if(peos[i].open){
            list.push(peos[i]);
        }
    }
    // var sendcontent = JSON.stringify(list);
    // console.log(sendcontent);
    res.send(list.toString());
});
module.exports = router;