console.log("%c欢迎使用linyos 在这里可以查询到许多东西 %c（智能终端） %c输入 %chelp() %c获取帮助\n目前还是测试版 目前只在首页有 而且有bug记得联系我哦(●'◡'●) ",'','color: #00FA9A;','',"color: #00FA9A;",'');function help(){console.log("这里是帮助页面\n使用%cecho('参数')%c使用输出\n使用%cmsg()%c跳转至留言板",'color:#00FA9A;','','color:#00FA9A;','');return "The command has been successfully run"};function echo(neirong){console.log(neirong);return "The command has been successfully run"};function msg(){document.location.href="https://www.awaliny.top/msg.html";return "The command has been successfully run"};