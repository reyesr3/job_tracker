/*var app = angular.module('rsgApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/partial1', {
			templateUrl: '/partials/partial1.html',
			controller: 'jobsController'
		})
		.when('/partial2', {
			templateUrl: '/partials/partial2.html',
			controller: 'contactsController'
		})
		.when('/partial3', {
			templateUrl: '/partials/partial3.html',
			controller: 'jobsController'
		})
		.when('/partial4',{
			templateUrl: '/partials/partial4.html',
			controller: 'contactsController'
		})

		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});

// Factory Time
app.factory('jobFactory', function($http){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/jobs').success(function(output){
			callback(output);
		})
	}

	factory.create = function(jobInfo, callback) {
		$http.post('/jobs', jobInfo).success(function(output){
			callback(output)
		})
	}

	return factory;
})

app.factory('contactFactory', function($http){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/contacts').success(function(output){
			callback(output);
		})
	}
	return factory;
})

// Controller Time
app.controller('jobsController', function($scope, jobFactory){
	jobFactory.index(function(json){
		$scope.jobs = json;
	})

	$scope.createJob = function(){
		jobFactory.create($scope.newJob, function(json){
			$scope.jobs = json;
			$scope.newPlayer = {};
		})
	}
})

app.controller('contactsController', function($scope, contactFactory){
	contactFactory.index(function(json){
		$scope.contacts = json;
	})
})*/