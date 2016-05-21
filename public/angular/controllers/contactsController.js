app.controller('contactsController', function($scope, contactFactory, interactionFactory, $routeParams, $location){

	$scope.isCollapsed = true;

	contactFactory.index(function(json){
		$scope.contacts = json;
	})

	interactionFactory.index(function(json){
		$scope.interactions = json;
	})

	// Used for show contact page
	if($routeParams.id != undefined){
		contactFactory.getContact($routeParams.id, function(json){
			$scope.contact = json;
		})
	}

	// Used for show interaction page
	// if($routeParams.id != undefined){
	// 	interactionFactory.getInteraction($routeParams.id, function(json){
	// 		$scope.interaction = json;
	// 		console.log(json)
	// 	})
	// }

	$scope.createContact = function(){
		contactFactory.create($scope.newContact, function(json){
			$scope.contacts = json;
			$scope.newContact = {};
		})
	}
	$scope.updateContact = function(contactID){
		contactFactory.update(contactID, $scope.updateContactInfo, function(json){
			$scope.updateContactInfo = {};
			$location.path('/partial2')
			$scope.message = "Contact has been updated!";
		})
	}
	$scope.deleteContact = function(contactID){
		contactFactory.delete(contactID, function(json) {
			$scope.contacts = json;
		})
	}

	// Functions for interactions
	$scope.createInteraction = function(){
		$scope.newInteraction.interaction.contact_id = $scope.contact.id;
		console.log($scope.newInteraction);
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