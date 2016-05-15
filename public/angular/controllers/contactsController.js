app.controller('contactsController', function($scope, contactFactory){
	contactFactory.index(function(json){
		$scope.contacts = json;
	})
})