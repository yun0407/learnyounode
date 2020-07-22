//Step1：獲取fs這個lib
const fs = require('fs')
//要引用官方的 lib ，fs變數名稱可自取名，但後面要一樣

fs.readFile((process.argv[2]), 'utf8',  (err,data) => {
    if (err) {
    throw err;}
    console.log(data.split('\n').length-1);
 })

//Step2：給fs非同步讀檔readfile
//fs.readFileSync('/home/cello-analyzer/文件/count.js')
//讀檔案，給絕對或相對路徑，要用'框起來'
//process.argv[2]:檔案路徑是隨參數的寫法

//Step3：fs.readFile(path/fileName [,options], callback)
                   //放路徑          ,轉字串  , 使用callback這函數
//callback不能return 所以執行的東西都寫在裡面
//callback有 <err> 跟 <data> 兩種
// 在{}裡寫要做的哪些事 

//Step2-1：取資料
//console.log(data

//Step2-2：切資料以行切
//console.log(data.split('\n')

//Step2-３：切完數長度
//console.log(data.split('\n').length-1);
//數長度-1 因為會與直接cat XXX wc -l 多一個