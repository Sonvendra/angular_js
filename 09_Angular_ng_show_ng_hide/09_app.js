// Create a Module
var app = angular.module('HobbiesApp',[]);

// Create a Controller
app.controller('HobbiesAppCtrl',function($scope) {
    $scope.eating = null;
    $scope.coding = null;
    $scope.sleeping = null;
});