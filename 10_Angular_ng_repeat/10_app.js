// Create a Module
var app = angular.module('GoodMorningApp',[]);

// Create a Controller
app.controller('GoodMorningAppCtrl',function($scope) {
    $scope.givenTime = null;
    $scope.theMessage = null;
    $scope.name = null;
    $scope.times = null;
    $scope.timesArray = [];
    $scope.makeAnArray = function() {
        console.log($scope.times);
        if($scope.times !== null){
            $scope.timesArray = [];
            for(var i=0 ; i<$scope.times; i++){
                $scope.timesArray[i] = i+1;
            }
        }
        else{
            $scope.timesArray = [];
        }
    };
    $scope.wishMePlease = function() {
        if($scope.givenTime !== null){
            // Logic
            if($scope.givenTime <= 12){
                $scope.theMessage = 'Good Morning';
            }
            else if($scope.givenTime >12 && $scope.givenTime <= 17){
                $scope.theMessage = "Good Afternoon";
            }
            else if($scope.givenTime > 17 && $scope.givenTime <=23){
                $scope.theMessage = "Good Evening";
            }
            else{
                $scope.theMessage = 'Enter Proper Time';
            }
        }
        else{
            $scope.theMessage = '';
        }
    };
});