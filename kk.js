const http = require("http")
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('hello world\n');

}).listen(5656);

console.log('finish');
console.log('finish2');
