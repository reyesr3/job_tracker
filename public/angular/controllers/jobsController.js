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
})