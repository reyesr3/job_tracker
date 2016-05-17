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

<<<<<<< HEAD
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
=======
	factory.delete = function(jobID, callback) {
		$http.delete('/jobs/'+jobID).success(function(output) {
			callback(output)
		})
	}

>>>>>>> c54fdcd3865f1ed1e435de2b12497b2f1ba84b34
	return factory;
})