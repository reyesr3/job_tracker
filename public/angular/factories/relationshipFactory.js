// Factory Time
app.factory('relationshipFactory', function($http){
	var factory = {};
	factory.index = function(contactID, callback) {
		$http.get('/relationships/'+contactID).success(function(output){
			callback(output)
		})
	}

	factory.create = function(contactID, jobID, callback){
		$http.post('/relationships/'+contactID, {jobID: jobID}).success(function(output){
			// console.log(output)
			callback(output)
		})
	}

	factory.delete = function(contactID, jobID, callback) {
		$http.delete('/relationships/'+contactID, {params:{jobID: jobID}}).success(function(output){
			callback(output)
		})
	}

	return factory;
})	