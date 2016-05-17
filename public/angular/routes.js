var app = angular.module('rsgApp', ['ngRoute']);

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
		.when('/contactShow/:id', {
			templateUrl: 'partials/contactShow.html',
			controller: 'contactsController'
		})

		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});