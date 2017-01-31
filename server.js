var express = require("express"),
	app = express();

app.get('/', function (req, res) {
	res.sent("Hello world from server.js")
}); // set route to index page

app.listen(3000);
console.log("Server running on port 3000");