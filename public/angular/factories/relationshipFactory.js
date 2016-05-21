// Factory Time
app.factory('relationshipFactory', function($http){
	var factory = {};
	factory.index = function(contactID, callback) {
		$http.get('/relationships/'+contactID).success(function(output){
			callback(output)
		})
	}

	factory.create = function(contactID, jobID, callback){
		$http.post('/relationships', {contactID: contactID, jobID: jobID}).success(function(output){
			// console.log(output)
			callback(output)
		})
	}

	factory.delete = function(contactID, jobID, callback) {
		$http.post('/relationships/destroy', {contactID: contactID, jobID: jobID}).success(function(output){
			callback(output)
		})
	}

	return factory;
})	