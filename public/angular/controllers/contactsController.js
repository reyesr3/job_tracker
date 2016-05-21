app.controller('contactsController', function($scope, contactFactory, $routeParams, $location){

	contactFactory.index(function(json){
		$scope.contacts = json;
	})

	// Used for show contact page
	if($routeParams.id != undefined){
		contactFactory.getContact($routeParams.id, function(json){
			$scope.contact = json;
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
})