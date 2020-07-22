const http = require('http');
const url = process.argv[2].toString();
const url2 = process.argv[3].toString();
const url3 = process.argv[4].toString();
const bl = require('bl')

http.get(url, function(res,list) {

    res.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
            }
        data = data.toString()
        console.log(data)
        }))
//先做給的第一個參數      
    http.get(url2, function(res) {
            res.pipe(bl(function (err, data) {
                if (err) {
                    return console.error(err)
                    }
                data = data.toString()
                console.log(data)
                }))
    //但因為是callback有順序問題,所以要放在上個callback裡面
                http.get(url3, function(res) {
                    res.pipe(bl(function (err, data) {
                        if (err) {
                            return console.error(err)
                            }
                        data = data.toString()
                        console.log(data)
                        }))
                    });   
                //同上,所以第三個參數要做時要放在第二個callback裡面     
            });
    });