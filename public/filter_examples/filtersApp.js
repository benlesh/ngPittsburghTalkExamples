var app = angular.module('filtersApp', []);

// custom filter definitions return a function that take an input and some arguments
// and return something (usually to be written to a view).
app.filter('llamafy', function() {
    return function(input, rCount) {
        rCount = rCount || 1;
        var rs = [];
        for(var i = 0; i < rCount; i++) {
            rs.push('R');
        }
        return input + ' - BRWA' + rs.join('') + '!!!';
    }
});

// a controller for some initialization of model values.
app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.pennyCount = 123123;
    $scope.yarr = new Date(2014, 8, 14);
    $scope.saySomething = '';
}]);