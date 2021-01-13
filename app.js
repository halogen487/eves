var http = require("http")
var fs = require("fs")
var path = require("path")

http.createServer(function (req, res) {
	if (req.url == "/") {
		res.writeHead(200, {"Content-Type": "text/html"})
		var fileStream = fs.createReadStream("./index.html")
		fileStream.pipe(res)
	}
	else if (req.url.match("\.css$")) {
		res.writeHead(200, {"Content-Type": "text/css"})
		var fileStream = fs.createReadStream(path.join("." + req.url))
		fileStream.pipe(res)
	}
	else if (req.url.match("\.js$")) {
		res.writeHead(200, {"Content-Type": "text/javascript"})
		var fileStream = fs.createReadStream(path.join("." + req.url))
		fileStream.pipe(res)
	}
	else {
		res.writeHead(404, {"Content-Type": "text/html"})
		var fileStream = fs.createReadStream("./404.html")
		fileStream.pipe(res)
	}
}).listen(8080)