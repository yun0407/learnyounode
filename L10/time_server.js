const net = require('net')  

const server = net.createServer(function (socket) {
    server.on('error', (err) => {
        throw err;
      });
    //server.on這裡其實可有可無
    const date = new Date() 
    const Y = date.getFullYear()    
    const M = ((date.getMonth() +1 < 10)?"0":"")+(date.getMonth()+1)
    const D = ((date.getDate() +1 < 10)?"0":"") + (date.getDate())
    const H = (date.getHours()<10 ? '0' : '') + (date.getHours())  
    const Min =(date.getMinutes()<10 ? '0' : '')+ (date.getMinutes())
                // <10 做兩位數補0的動作。<10就補0。+拿到的數據
    YY = Y.toString()
    MM = M.toString()
    DD = D.toString()
    HH = H.toString()
    Mins = Min.toString()
    //轉字串
    const timestring = YY + "-" + MM + "-" + DD + " " + HH + ":" + Mins
    //組字串
    socket.end(timestring+"\n");
         //關閉socket //題目要求的換行
})  
server.listen(process.argv [2])  
//獲取第一個參數