app.controller('interactionsController', function($scope, interactionFactory, $routeParams, $location){

	interactionFactory.index(function(json){
		$scope.interactions = json;
	})

	// Used for show interaction page
	if($routeParams.id != undefined){
		interactionFactory.getInteraction($routeParams.id, function(json){
			$scope.interaction = json;
			console.log(json)
		})
	}

	$scope.createInteraction = function(){
		interactionFactory.create($scope.newInteraction, function(json){
			$scope.interactions = json;
			$scope.newInteraction = {};
		})
	}
	$scope.updateInteraction = function(interactionID){
		interactionFactory.update(interactionID, $scope.updateInteractionInfo, function(json){
			$scope.updateInteractionInfo = {};
			$location.path('/partial2')
			$scope.message = "Activity has been updated!";
		})
	}
	$scope.deleteInteraction = function(interactionID){
		interactionFactory.delete(interactionID, function(json) {
			$scope.interactions = json;
		})
	}
})