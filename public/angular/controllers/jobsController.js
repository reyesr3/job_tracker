// Controller Time
app.controller('jobsController', function($scope, jobFactory){
	jobFactory.index(function(json){
		$scope.jobs = json;
	})

	$scope.createJob = function(){
		jobFactory.create($scope.newJob, function(json){
			$scope.jobs = json;
			$scope.newJob= {};
		})
	}

	$scope.deleteJob = function(jobID){
		jobFactory.delete(jobID, function(json) {
			$scope.jobs = json;
		})
	}
<<<<<<< HEAD

	$scope.editJob = function (data) {
		jobFactory.editJob($scope.job, function(data) {
		$scope.job = data.data;
	})
	}

	$scope.updateJob = function(){
		jobFactory.update($scope.updateJob, function(json){
			$scope.jobs = json;
			$scope.updateJob = {};
		})
	}
=======
>>>>>>> c54fdcd3865f1ed1e435de2b12497b2f1ba84b34
})