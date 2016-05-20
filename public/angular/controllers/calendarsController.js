app.controller('calendarsController', function($scope, $animate, $timeout){

	$scope.createEvent = function(newEvent){
		console.log(newEvent);
		console.log($scope.newEvent);
	}
})