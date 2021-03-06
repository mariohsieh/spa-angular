// create module and name it
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider

		// route for homepage
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'views/about.html',
			controller : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller : 'contactController'
		});
});

// main controller and inject into $scope
scotchApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = "This is the home page!";

});

// about controller
scotchApp.controller('aboutController', function($scope) {
	$scope.message = "This is the about page";
});

// contact controller
scotchApp.controller('contactController', function($scope) {
	$scope.message = "Contact us please!";
});
