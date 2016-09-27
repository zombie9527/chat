var net = require('net');

const PORT = 18000;

var clientList = [];
var cliIndex = 0;

/**
 * chat 函数
 */
// var clientHandler = function(){
var clientHandler={
  start : function(){
    var chatNet = net.createServer(); 

    chatNet.on('connection',function(client){
      console.log('someone connected');
      //clientList[cliIndex].index = cliIndex;
      // clientList[cliIndex].name = 'people'+cliIndex;
      // clientList[cliIndex].socket = client;
      // clientList[cliIndex].open = true;
     
      var theSocket={
        index : cliIndex,
        name:'people'+cliIndex,
        socket:client,
        open:true
      }
      cliIndex++;
      clientList.push(theSocket);
      client.on('data',function(data){
        var chatData = JSON.parse(data);
        var cli = clientList[chatData.index].socket;
        cli.write(chatData.content);
        console.log(chatData.index+":"+clientList[chatData.index]);
      });
      client.on('close',function(client){
        for(var j = 0;j<clientList.length;j++){
          if(clientList[j].socket === client){
            clientList[j].open = false;
          }
        }
      });
    });

    chatNet.listen(PORT,console.log('tcp is opened'));
    
},
getList:function(){
  return clientList;
}
}
module.exports = clientHandler;