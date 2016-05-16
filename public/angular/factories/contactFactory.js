app.factory('contactFactory', function($http){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/contacts').success(function(output){
			callback(output);
		})
	}

	factory.create = function(contactInfo, callback) {
		$http.post('/contacts', contactInfo).success(function(output){
			callback(output)
		})
	}

	factory.delete = function(contactID, callback) {
		$http.delete('/contacts/'+contactID).success(function(output) {
			callback(output)
		})
	}

	return factory;
})