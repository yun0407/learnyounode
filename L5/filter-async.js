const fs = require('fs')
const path = require('path')
const filepath = process.argv [2]
const fileExt = "." + process.argv [3]

fs.readdir(filepath, (err, list) => {
  if (err) {
    return console.error(err)
  }

  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === fileExt) {
      console.log(list[i])
    } 
  }
})
// //Step1：獲取fs這個lib
// const fs = require('fs')
// //要引用官方的 lib ，fs變數名稱可自取名，但後面要一樣
// const path = require("path")

//Step2：給fs非同步讀資料夾readdir
//fs.readdir('/home/cello-analyzer/文件/count.js')
//讀檔案，給絕對或相對路徑，要用'框起來'
//process.argv[2]:檔案路徑是隨參數的寫法

//Step3：