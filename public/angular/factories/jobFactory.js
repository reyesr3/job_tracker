// Factory Time
app.factory('jobFactory', function($http, $routeParams){
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

	factory.edit = function(id, callback) {
		$http.get('/jobs/'+id+'/edit').success(function(output) {
			callback(output);
		})
	}

	factory.update = function(id, jobInfo, callback) {
		$http.post('/jobs/'+id, jobInfo).success(function(output){
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