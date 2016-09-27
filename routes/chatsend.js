var express = require('express');
var router = express.Router();
var net = require('net');

const HOST = '127.0.0.1';
const PORT = '18000';

var tcpClient = net.Socket();
/* GET users listing. */
router.get('/',function(req,res,next){
    tcpClient.connect(PORT,HOST,function(){
    console.log('connect success');
    res.send('req.body');
    });
});

router.post('/',function(req, res, next) {
    var data = req.body;
    tcpClient.write(JSON.stringify(data));
});
tcpClient.on('data',function(data){
    console.log('received:',data.toString());
});
module.exports = router;