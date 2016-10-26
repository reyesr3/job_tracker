// Controller Time
app.controller('jobsController', function($scope, jobFactory, $routeParams, $location) {

	jobFactory.index(function(json){
		$scope.jobs = json;
	})

	if($routeParams.id != undefined){
		jobFactory.edit($routeParams.id, function(json){
			$scope.job = json;
		})
	}

	$scope.createJob = function(){
		jobFactory.create($scope.newJob, function(json){
			$scope.jobs = json;
			$scope.newJob= {};
			$scope.messages = "Job has been added!";
			$location.path('/partial1')
		})
	}

	$scope.updateJob = function(jobID){
		jobFactory.update(jobID, $scope.updateJobInfo, function(json){
			$scope.updateJobInfo = {};
			$location.path('/partial1')
			$scope.messages = "Job has been updated!";
		})
	}

	$scope.deleteJob = function(jobID){
		jobFactory.delete(jobID, function(json) {
			$scope.jobs = json;
		})
	}

})