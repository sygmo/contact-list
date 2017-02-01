var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function appCtrl($scope, $http) { 
	// connect controller.js file to index.html file
	
	console.log("Hello world from the controller");

	$http.get('/contactlist').then(function (res){ // /contactlist is route to get data from
		console.log("I got the requested data");
		$scope.contactList = res.data;
	}); 

	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).then(function (response){
			console.log(response);
		});
		// $scope.contact --> data we're sending to the server

	};

}])
