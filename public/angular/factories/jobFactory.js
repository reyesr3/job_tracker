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

	factory.editJob = function(id, callback) {
		$http.get('/jobs/'+id+'/edit').success(function(data) {
			console.log(data);
			callback(data);
		})

	}


	// factory.update = function(jobInfo, callback) {
	// 	$http.post('/jobs/update', jobInfo).success(function(output){
	// 		callback(output)
	// 	})
	// }
	return factory;
})