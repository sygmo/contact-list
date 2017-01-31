var express = require("express"),
	app = express();

app.use(express.static(__dirname + "/public")); // static - javascript, html, and css files
app.use(express.static(__dirname + "/bower_components")); // angular files

app.get('/contactlist', function (req, res) {
	console.log("I received a GET request")

	person1 = {
		name: "Tim",
		email: "tim@gmail.com",
		number: "(111) 111-1111"
	};
	person2 = {
		name: "Emily",
		email: "emily@gmail.com",
		number: "(222) 222-2222"
	};
	person3 = {
		name: "John",
		email: "john@gmail.com",
		number: "(333) 333-3333"
	};
	var contactList = [person1, person2, person3];
	res.json(contactList); // respond to GET request by sending back data in json format
});

app.listen(3000);
console.log("Server running on port 3000");