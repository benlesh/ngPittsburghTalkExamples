var app = angular.module('serviceApp', []);

// There are many ways to create an injectable service. The most common
// is using Module.prototype.factory() which does the work of creating an
// instance for the service, one time, like a singleton of sorts.
app.factory('itemService', ['$http', function($http) {
    return {
        getItems: function() {
            // use $http.get to "GET" the data. If the data is JSON, it will be
            // scrubbed into the response.data property as an object.
            // Alternatively, you could use $http.get().success(). I just prefer standard
            // promise syntax.
            return $http.get('items.json').then(function(response) {
                return response.data;
            });
        }
    };
}]);

// inject your itemService!
app.controller('MainCtrl', ['$scope', 'itemService', function ($scope, itemService) {
    this.loadItems = function () {
        // use the getItems() function, then handle the promise
        // to set the items model on the scope.
        itemService.getItems().then(function (items) {
            $scope.items = items;
        });
    };
}]);