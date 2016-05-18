app.directive('datepicker', ['$parse', function($parse) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            //using $parse instead of scope[attrs.datepicker] for cases
            //where attrs.datepicker is 'foo.bar.lol'
            parsed = $parse(attrs.startDate);
            $(element).datepicker({
                onSelect: function(dateText, inst) {
                    scope.$apply(function(){
                        parsed.assign(scope, dateText);
                    });
                }
            })
        }
    }
}]);