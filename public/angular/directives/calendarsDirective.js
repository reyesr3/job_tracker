app.directive('datepicker', ['$parse', function($parse) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            //using $parse instead of scope[attrs.datepicker] for cases
            //where attrs.datepicker is 'foo.bar.lol'
            var parsed = $parse(attrs.ngModel);
            $(element).click("", function(datetime, inst){
                    scope.$apply(function(){
                        parsed.assign(scope, datetime.currentTarget.value);
                    });
            })  
/*            $(element).data({
                onSelect: function(dateText, inst) {
                    scope.$apply(function(){
                        parsed.assign(scope, dateText);
                        console.log("why isnt it coming in here")
                    });
                    console.log("hello")
                }
            })*/
        }
    }
}]);