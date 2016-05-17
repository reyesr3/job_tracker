app.controller('contactsController', function($scope, contactFactory){
	contactFactory.index(function(json){
		$scope.contacts = json;
	})

	$scope.createContact = function(){
		contactFactory.create($scope.newContact, function(json){
			$scope.contacts = json;
			$scope.newContact = {};
		})
	}

	$scope.deleteContact = function(contactID){
		contactFactory.delete(contactID, function(json) {
			$scope.contacts = json;
		})
	}

	$scope.getUser = function(contactID){
		contactFactory.getUser(contactID, function(json){
			console.log(json)
			$scope.contact = json;
			console.log($scope.contact);
		})
	}
})