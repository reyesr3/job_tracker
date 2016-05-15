app.factory('contactFactory', function($http){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/contacts').success(function(output){
			callback(output);
		})
	}
	return factory;
})