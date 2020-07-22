// const argv = process.argv
// console.log("argv:",argv)

// const a = Number(argv[2])
// console.log("a:", a, typeof(a))
//"a:"字串：取的參數，顯示a的型態

const mymodule = require ('./modules.js')
// mymodule.exports = mymodule();
const dir = process.argv [2]
const fileExt = process.argv [3]

    mymodule( dir, fileExt, function(err,list) {

    list.forEach(function (file) {
        console.log(file)
    })
    })

