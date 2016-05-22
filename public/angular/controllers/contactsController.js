app.controller('contactsController', function($scope, contactFactory, jobFactory, relationshipFactory, $routeParams, $location){

	var createError = "";

	contactFactory.index(function(json){
		$scope.contacts = json;
	})
	// Used to show flash message
	$scope.$on('$routeChangeStart', function() {
    	$scope.showMessages = false;
	})

	// Used for show contact page
	if($routeParams.id != undefined){
		contactFactory.getContact($routeParams.id, function(json){
			$scope.contact = json;
		})

		jobFactory.index(function(json){
			$scope.jobs = json;
		})

		relationshipFactory.index($routeParams.id, function(json){
			$scope.relationships = json;
		})
	}

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

	$scope.addRelationship = function(contactID, jobID){
		relationshipFactory.create(contactID, jobID, function(json){
			$scope.relationships = json;
		})
	}

	$scope.deleteRelationship = function(contactID, jobID){
		relationshipFactory.delete(contactID, jobID, function(json){
			$scope.relationships = json
		})
	}
})