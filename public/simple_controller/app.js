// module declaration
// note: the [] here is important!
var app = angular.module('myApp', []);

app.controller('MyCtrl', ['$scope', function($scope) {

    // initialize your name model to something
    $scope.name = 'Yinz Guys';

    // create a controller method that changes the name
    this.changeName = function(newName) {
        $scope.name = newName;
    };
}]);