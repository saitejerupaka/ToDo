var http = require('http');

var handler = function (req, res) {
    var str = '';
    console.log("got" + req)

    var processData = function () {
        res.writeHead(200, "OK", {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var taskList = [ 
                {isDone : true, title : "Task1"},
                {isDone : false, title : "Task21"},
                {isDone : true, title : "Task12"},
                {isDone : false, title : "Task121"},
                {isDone : true, title : "Task13"},
                {isDone : true, title : "Task112"},

            ];
        res.end(JSON.stringify(taskList));
    };
    if (req.method === 'GET') {
        var appendChunk = function (chunk) {
            str += chunk;
        };
        req.on('data', appendChunk);
        req.on('end', processData);
    } else {
        console.log("Couldn't get data. request method is not supported");
        res.writeHead(405, "Method not supported", { 'Content-Type': 'text/plain' });
        res.end();
    }
}

var server = http.createServer(handler);
server.listen(8079);
console.log("listening to 8079");

