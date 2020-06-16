const fs = require('fs')
//要引用官方的 lib ，fs變數名稱可自取名，但後面要一樣

filepath=process.argv[2]
//檔案路徑是隨參數的寫法

//fs.readFileSync(filepath)
becomeBuffer  =  fs.readFileSync(filepath)

BuffertoString  =  becomeBuffer.toString()
//令 剛剛轉換的字串 為 BuffertoString

Count = BuffertoString.split('\n')
//令 切割過後的字串為 Count

//Count.length -1
//數長度-1 因為會與直接cat XXX wc -l 多一個
console.log(Count.length-1)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//Step1：給路徑
//fs.readFileSync('/home/cello-analyzer/文件/count.js')
//讀檔案，給絕對或相對路徑，要用'框起來'

//Step1-2：給變數
//becomeBuffer  =  fs.readFileSync('/home/cello-analyzer/文件/count.js')
//讓讀的檔案變 Buffer ( 儲存和操作無論編碼是 ASCII、二位元或其他的格式)

//Step2：Buffer 物件的內容轉換成可見字串
//becomeBuffer.toString()

//Step3：切割，以 \n 做切割
//BuffertoString.split('\n')
//，\n 表換行

//Step4：數長度
//Count.length

//變數最好不要首字大寫，少數，但可以前面小寫，中間大寫
