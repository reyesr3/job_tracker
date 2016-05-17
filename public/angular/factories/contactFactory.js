app.factory('contactFactory', function($http, $location){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/contacts').success(function(output){
			callback(output);
		})
	}

	factory.create = function(contactInfo, callback){
		$http.post('/contacts', contactInfo).success(function(output){
			callback(output)
		})
	}

	factory.delete = function(contactID, callback){
		$http.delete('/contacts/'+contactID).success(function(output){
			callback(output)
		})
	}

	factory.getUser = function(contactID, callback){
		$http.get('/contacts/'+contactID).success(function(output){
			callback(output)
			$location.path('/contactShow')
		})
	}

	return factory;
})