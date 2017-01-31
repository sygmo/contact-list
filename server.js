var express = require('express'),
	app = express();

app.use(express.static(__dirname + "/public")); // static - javascript, html, and css files

app.listen(3000);
console.log("Server running on port 3000");