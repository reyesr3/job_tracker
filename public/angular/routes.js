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
		.when('/jobs/:id/edit',{
			templateUrl: '/partials/jobEdit.html',
			controller: 'jobsController'
		})
		.when('/jobShow/:id', {
			templateUrl: 'partials/jobShow.html',
			controller: 'jobsController'
		})
		.when('/contacts/:id/edit',{
			templateUrl: '/partials/contactEdit.html',
			controller: 'contactsController'
		})
		.when('/contactShow/:id', {
			templateUrl: 'partials/contactShow.html',
			controller: 'contactsController'
		})
		.when('/createvent', {
			templateUrl: 'partials/createvent.html',
			controller: 'calendarsController'
		})

		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});