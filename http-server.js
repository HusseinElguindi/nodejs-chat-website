var fs = require('fs');
var http = require('http');

var myArgs = process.argv.slice(2);
var port = parseInt(myArgs[0]);

http.createServer(function (req, res) {
    
    // res.write(req.url);

    if (req.url=="/ws")
    {
        // startServer();
    }
    else if (req.url == "/index.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        console.log("here");
        let file = fs.createReadStream('index.html');
        file.pipe(res);
    }
    else if (req.url == "/style.css")
    {
        res.writeHead(200, {'Content-Type': 'text/css'});
        console.log("here 1");
        let file = fs.createReadStream('style.css');
        file.pipe(res);
    }
    else if (req.url == "/main.js")
    {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        console.log("here 2");
        let file = fs.createReadStream('main.js');
        file.pipe(res);
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        console.log("here");
        let file = fs.createReadStream('index.html');
        file.pipe(res);
    }

    res.end();
}).listen(port);