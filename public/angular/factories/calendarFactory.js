app.factory("calendarFactory", function($http){
	var factory = {};
	factory.createEvent = function(eventInfo){
		$http.post("/calendars" , eventInfo).success(function(){
		})
	}
	factory.googleLogin = function(){
		$http.get("/calendars/googlelogin").success(function(){
		})
	}
	return factory;
})