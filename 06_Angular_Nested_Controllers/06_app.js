// Create a Module
var app  = angular.module('NestedApp',[]);

// Create a Parent Controller
app.controller('ParentCtrl',function($scope) {
    $scope.test = null;
});

// Create a Child Controller
app.controller('ChildCtrl',function($scope) {
    //$scope.test = null;
});