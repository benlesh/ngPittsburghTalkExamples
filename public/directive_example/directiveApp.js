var app = angular.module('directiveApp', []);

app.directive('blink', ['$window', function($window) {
    var setInterval = $window.setInterval;

    return {
        // restrict the directive to being an element
        // A = attribute, E = element, M = comment
        restrict: 'E',

        // The linking function does the work of binding
        // behaviors to the dom (and to the model on the scope as well)
        // here we're just dealing with DOM manipulation though.
        link: function(scope, elem) {
            elem.css({
                opacity: 1,
                // dat fade...
                '-moz-transition': 'opacity 300ms',
                '-webkit-transition': 'opacity 300ms',
                'transition': 'opactiy 300ms'
            });

            setInterval(function(){
                var opacity = elem.css('opacity');
                elem.css('opacity', opacity === '1' ? 0 : 1);
            }, 1000);
        }
    }
}]);