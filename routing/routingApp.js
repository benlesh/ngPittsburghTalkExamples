// besides including the angular-route.js script on the page,
// you need to reference the ngRoute module as a dependency to your
// application module.
var app = angular.module('routingApp', ['ngRoute']);

// routes are wired up during the configuration phase of your app
// using the $routeProvider.
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/route1', {
            controller: 'Route1Ctrl',
            templateUrl: 'route1.html'
        })
        .when('/route2/:param1', {
            controller: 'Route2Ctrl',
            templateUrl: 'route2.html'
        })
        .otherwise({
            controller: 'NotFoundCtrl',
            templateUrl: 'notfound.html'
        });
}]);

// Some controllers examples...

app.controller('Route1Ctrl', ['$scope', function ($scope) {
    $scope.title = 'Route 1';
}]);

// this one is actually taking a route parameter. Notice the :param1 in the route
// definition above.
app.controller('Route2Ctrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.title = 'Route 2';
    $scope.passedValue = $routeParams.param1;
}]);

app.controller('NotFoundCtrl', function () {
});