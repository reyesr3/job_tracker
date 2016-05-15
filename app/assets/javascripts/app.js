var app = angular.module('rsgApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/partial1', {
			templateUrl: '/partials/partial1.html',
			controller: 'jobsController'
		})
		.when('/partial2', {
			templateUrl: '/partials/partial2.html',
			controller: 'contactsController'
		})
});

app.controller('jobsController', function($scope){
	$scope.jobs = [];
})

app.controller('contactsController', function($scope){
	$scope.contacts = [];
})