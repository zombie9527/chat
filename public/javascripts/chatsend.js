
var net = require('net');

const HOST = '127.0.0.1';
const PORT = '18000';

var tcpClient = net.Socket();
/* GET users listing. */
tcpClient.connect(PORT,HOST,function(){
    console.log('connect success');
    res.send('req.body');
});

    tcpClient.write(JSON.stringify(data));

tcpClient.on('data',function(data){
    console.log('received:',data.toString());
});
