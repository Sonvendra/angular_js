// Create a Module
var app = angular.module('LoginApp',[]);

// Create a Controller
app.controller('LoginAppCtrl',function($scope) {
    $scope.username = null;
    $scope.email = null;
    $scope.password = null;
    $scope.remPassword = null;
});