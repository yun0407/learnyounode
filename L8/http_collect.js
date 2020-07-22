const http = require('http');
const url = process.argv[2].toString()
const bl = require('bl')

http.get(url, function(res) {
    res.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
            }
        data = data.toString()
        console.log(data.length)
        console.log(data)
        }))
    });
// http.get(process.argv[2], (res) => {
//     res.setEncoding('utf8')
//     res.on('data', function (data) { 
//         data += data
//     })
//     res.on('end', () => {
//         console.log(data.length);
//         console.log(data);
//     })
//     res.on('error', (err) => {
//         console.error(err);
//       })
// })
// .on('error', console.error);