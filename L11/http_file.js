const http = require('http')  
const fs = require('fs')
const file = process.argv[3]

const server = http.createServer(function (req, res) {  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write('Hello World!');
    //res.end();

    fs.createReadStream(file).pipe(res);
})

       server.listen(process.argv[2])

