const http = require('http')

http.createServer(function(req, res){
res.end("Server")
}).listen(8080)