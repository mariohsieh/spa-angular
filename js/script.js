// create module
var scotchApp = angular.module('scotchApp', []);

// create main controller and inject into $scope
scotchApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'This is the main controller!';

});
