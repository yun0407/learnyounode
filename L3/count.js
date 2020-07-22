const fs = require('fs')
//要引用官方的 lib 

//fs.readFileSync('/home/cello-analyzer/文件/count.js')
//讀檔案，給絕對或相對路徑，要用'框起來'
//console.log(process.argv)
filepath=process.argv[2]

//fs.readFileSync(filepath)
//becomeBuffer  =  fs.readFileSync('/home/cello-analyzer/文件/count.js')
//讓讀的檔案變 Buffer ( 儲存和操作無論編碼是 ASCII、二位元或其他的格式)
becomeBuffer  =  fs.readFileSync(filepath)

//becomeBuffer.toString()
//Buffer 物件的內容轉換成可見字串

BuffertoString  =  becomeBuffer.toString()
//令 剛剛轉換的字串 為 BuffertoString

//BuffertoString.split('\n')
//以 \n 做切割，\n 表換行

Count = BuffertoString.split('\n')
//令 切割過後的字串為 Count

//Count.length
//數長度

//Count.length -1
//長度-1

//變數最好不要首字大寫，少數，但可以前面小寫，中間大寫

console.log(Count.length-1)