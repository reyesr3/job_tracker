// Factory Time
app.factory('jobFactory', function($http){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/jobs').success(function(output){
			callback(output);
		})
	}

	factory.create = function(jobInfo, callback) {
		$http.post('/jobs', jobInfo).success(function(output){
			callback(output)
		})
	}

	factory.delete = function(jobID, callback) {
		$http.delete('/jobs/'+jobID).success(function(output) {
			callback(output)
		})
	}

	return factory;
})