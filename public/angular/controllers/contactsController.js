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
})