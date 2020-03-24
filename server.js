var myArgs = process.argv.slice(2);
var port = parseInt(myArgs[0]);

const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: port });

// var clients = [];

var fs = require('fs');
var http = require('http');

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

    // res.end();
}).listen(port);


// function startServer() 
// {
//     wss.on('connection', function connection(ws) {

//         clients.push(ws);
//         console.log(clients.length);

//         ws.on('message', function incoming(message) {
//             var obj = JSON.parse(message);

//             if (obj.type == "name_change") {

//             }
//             else if (obj.type == "message") {
//                 wss.broadcastMsg(message);
//             }
//             else if (obj.type == "command") {
//                 if (obj.data == "./connections") {

//                     let obj = {
//                         type: "message",
//                         usr: {
//                             name: "Server",
//                             id: -1,
//                             color: "rgb(0, 0, 0)"
//                         },
//                         data: `There are ${clients.length} connections.`
//                     };

//                     ws.send(JSON.stringify(obj));
//                 }
//             }
//         });

//         ws.on('close', function close(reasonCode, description) {
//             clients.splice(clients.indexOf(ws), 1);
//             // console.log(clients.length);

//             let obj = {
//                 type: "message",
//                 usr: {
//                     name: "Server",
//                     id: -1,
//                     color: "rgb(0, 0, 0)"
//                 },
//                 data: "User left."
//             };

//             ws.send(JSON.stringify(obj));
//         });

//     });

//     wss.broadcastMsg = function (msg) {
//         console.log(msg);
//         clients.forEach(function each(client) {
//             client.send(msg);
//         });
//     };

// }