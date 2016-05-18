app.controller('calendarsController', function($scope, $animate){
  	angular.element('startDate').$dirty = true
  	angular.element('startDate').$touched = true
  	
	$scope.createEvent = function(newEvent){
		console.log(newEvent);
		console.log($scope.newEvent);
	}
})