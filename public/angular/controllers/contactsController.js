app.controller('contactsController', function($scope, contactFactory, jobFactory, relationshipFactory, $routeParams, $location){

	var info = [];
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

		// This function takes all Job ID's and Queries for
		// Contact Show Page -> connections table
		relationshipFactory.index($routeParams.id, function(json){
			// Need condition because info is emptry, will cause 
			// get error in Console
			// var condition = false;
			// json.forEach(function(json){
			// 	info.push(json.job_id);
			// 	condition = true;
			// })

			if(json){
				jobFactory.getJobs(json, function(json){
					$scope.relationships = json;
				})
			}
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
		info = []
		relationshipFactory.create(contactID, jobID, function(json){
			json.forEach(function(json){
				info.push(json.job_id);
			})

			jobFactory.getJobs(info, function(json){
				$scope.relationships = json;
			})
			// Reset so array doesn't keep values
			info = []
		})
	}

	$scope.deleteRelationship = function(contactID, jobID){
		info = []
		relationshipFactory.delete(contactID, jobID, function(json){
			json.forEach(function(json){
				info.push(json.job_id);
			})

			if(info.length == 0){
				$scope.relationships = []
			}
			else{
				jobFactory.getJobs(info, function(json){
					$scope.relationships = json;
				})
			}
			// Reset so array doesn't keep values
			info = []
		})
	}
})