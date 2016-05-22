app.factory('interactionFactory', function($http, $location){
	var factory = {};
	factory.index = function(callback) {
		$http.get('/interactions').success(function(output){
			callback(output);
		})
	}
	factory.create = function(interactionInfo, callback){
		$http.post('/interactions', interactionInfo).success(function(output){
			callback(output)
		})
	}
	factory.edit = function(id, callback) {
		$http.get('/interactions/'+id+'/edit').success(function(output) {
			callback(output);
		})
	}
	factory.update = function(id, interactionInfo, callback) {
		console.log(interactionInfo);
		$http.post('/interactions/'+id, interactionInfo).success(function(output){
			callback(output)
		})
	}
	factory.delete = function(interactionID, callback){
		$http.delete('/interactions/'+interactionID).success(function(output){
			callback(output)
		})
	}

	factory.getInteraction = function(interactionID, callback){
		$http.get('/interactions/'+interactionID).success(function(output){
			callback(output);
		})
	}
	return factory;
})