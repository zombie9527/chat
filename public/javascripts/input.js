$(document).ready(function(){
    var chooseindex = 0;

    content = $("#content");
    send = $("#send");
    sendbox = $("#sendbox");
    sendbt = $("#sendbt");
    peoList = $("#peoList");
    
    //$.get('/send',function(data){console.log('send open')});
    /**
     * 输入框变高
     */
    $('#sendbox').on('focus',function(){

    });

    sendbt.on('click',function(){
        if($("#sendbox").value.length!=0){
            $.post('/send',{index:chooseindex,content:$("#sendbox").value},function(){
                
            })
        }
    })
    /**
     * 获取在线人数
     */
    setTimeout(function(){
        $.get('/people',function(data){
            var list = JSON.parse(data);

            //var list = data;
            var html='';
            for (let j = 0;j<list.length;j++){
                html+='<li data-index='+list[j].index+ '>';
                html+=list[j].name+'</li>';
            }
            peoList.append(html);
        });
    },5000);
});