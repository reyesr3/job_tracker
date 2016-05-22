app.controller('calendarsController', function($scope, $animate, $timeout, calendarFactory){
	$scope.createEvent = function(newEvent){
		calendarFactory.createEvent(newEvent);
	}
	$scope.googleLogin = function(){
		calendarFactory.googleLogin()
	}
})