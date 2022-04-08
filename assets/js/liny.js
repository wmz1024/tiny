// Big Money-nw from http://patorjk.com/software/taag/ 
console.log("%c  ____  __    __   ____  _      ____  ____   __ __ \n /    ||  |__|  | /    || |    |    ||    \ |  |  |\n|  o  ||  |  |  ||  o  || |     |  | |  _  ||  |  |\n|     ||  |  |  ||     || |___  |  | |  |  ||  ~  |\n|  _  ||  `  '  ||  _  ||     | |  | |  |  ||___, |\n|  |  | \      / |  |  ||     | |  | |  |  ||     |\n|__|__|  \_/\_/  |__|__||_____||____||__|__||____/ \n",'color:#0f0;')
// 拒绝任何错误控制台输出（liny网站就要干干净净的呢[doge]）
var logDebug = false;
console.log = (function (oriLogFunc) {
  return function () {
    if (logDebug) {
      oriLogFunc.apply(this, arguments);
    }
  }
})(console.log);
