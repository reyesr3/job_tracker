app.factory('contactFactory', function($http){
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
	factory.edit = function(id, callback) {
		$http.get('/contacts/'+id+'/edit').success(function(output) {
			callback(output);
		})
	}
	factory.update = function(id, contactInfo, callback) {
		$http.post('/contacts/'+id, contactInfo).success(function(output){
			callback(output)
		})
	}
	factory.delete = function(contactID, callback){
		$http.delete('/contacts/'+contactID).success(function(output){
			callback(output)
		})
	}

	factory.getContact = function(contactID, callback){
		$http.get('/contacts/'+contactID).success(function(output){
			callback(output);
		})
	}

	return factory;
})