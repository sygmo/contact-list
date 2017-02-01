var express = require("express"),
	bodyParser = require("body-parser"),
	app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public")); // static - javascript, html, and css files
app.use(express.static(__dirname + "/bower_components")); // angular files

var mongoose = require("mongoose");
var db = mongoose.connection;
db.on('error', console.error);
mongoose.connect("mongodb://localhost/contactlist");

var clschema = mongoose.Schema({
	name: String,
	email: String,
	number: String
}, {collection: 'contactlist'});
var ContactList = mongoose.model('ContactList', clschema);

app.get('/contactlist', function (req, res) {
	console.log("I received a GET request")

	ContactList.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

	// person1 = {
	// 	name: "Tim",
	// 	email: "tim@gmail.com",
	// 	number: "(111) 111-1111"
	// };
	// person2 = {
	// 	name: "Emily",
	// 	email: "emily@gmail.com",
	// 	number: "(222) 222-2222"
	// };
	// person3 = {
	// 	name: "John",
	// 	email: "john@gmail.com",
	// 	number: "(333) 333-3333"
	// };
	// var contactList = [person1, person2, person3];
	// res.json(contactList); // respond to GET request by sending back data in json format
});

app.post('/contactlist', function (req, res) { // listens for post request from controller
	console.log(req.body);
	ContactList.save(req.body, function (err, doc) {
		res.join(doc);
	})
});

app.listen(3000);
console.log("Server running on port 3000");