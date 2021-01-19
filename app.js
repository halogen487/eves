const http = require("http")
const fs = require("fs")
const path = require("path")
const express = require("express"); const app = express()

app.use(express.static("public"))

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(8080)