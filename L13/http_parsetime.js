const http = require('http')
const url = require('url')

const port = process.argv[2]


http.createServer(function (request, response) {
    var urlObject = url.parse(request.url, true),
         pathname = urlObject.pathname,
        startTime = urlObject.query.iso,
        result;
    //創建 urlObject 開始callback，使用url.parse()函數解析 url 和查詢字符串。
    //要解析的 url 字符串將是 callback 的 req.url。
    //使用 url.parse（request.url，true）格式可以實現此目的。    
    //加載路徑從 urlObject 到變量路徑。將 query.iso 加載到 startTime 中。
    
    if (pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
        }
    
    else if (pathname === '/api/parsetime') {
        result = getTimeObj(startTime);
        }
    //如果路徑名等於'api / unixtime'，請使用getUnixTimeStamp()
    //（我們稍後將創建的函數）將正確的時間傳遞給result。
    //否則，如果路徑名是'/ api / parsetime'，
    //則使用getTimeObject()設置結果，該結果也會在以後創建。
    //在這兩種情況下，我們都將startTime變量傳遞給這些自定義函數。

  if (result) {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(result))
    //轉成JSON格式
  } else {
    response.writeHead(404)
    //如果沒有就寫入404
    response.end()
    //然後結束
  }
}).listen(port)

function getUnixTimeStamp(startTime) {
    return {
    unixtime: getTimeStamp(startTime)
        };
    }
//該getTimeStamp()函數會返回一個解析的日期在交付 getUnixTimeStamp()函數。
    
function getTimeStamp(startTime) {
    return Date.parse(startTime);
    }
    //使用 Date.parse() 解析 startTime。

function getTimeObj(startTime) {
    var date = new Date(getTimeStamp(startTime));
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
        };
    }
    //要創建的最終函數將是 getTimeObj()。
    //它將返回一個格式化的日期對象。
    //通過分配開始日期的返回值的日期()時，
    //它傳遞的開始時間由加工getTimeStamp()函數。
    //此後，返回挑戰設置的格式化時間對象。
    //使用幾個與時間相關的函數從日期對像中加載具有正確值的key和value：