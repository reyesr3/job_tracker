app.directive('datepickerStart', ['$parse', function($parse) {
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
        }
    }
}]);

app.directive('datepickerEnd', ['$parse', function($parse) {
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
        }
    }
}]);