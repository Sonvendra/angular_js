// Create a Module
var app = angular.module('FirstApp',[]);

// Create a Controller
app.controller('FirstAppCtrl',function($scope) {
    $scope.time = null;
    $scope.message = null;
    $scope.wishMe = function() {
      if($scope.time !== null){
          // Logic
          if($scope.time <= 12){
              $scope.message = 'Good Morning';
          }
          else if($scope.time >12 && $scope.time <= 17){
              $scope.message = "Good Afternoon";
          }
          else if($scope.time > 17 && $scope.time <=23){
              $scope.message = "Good Evening";
          }
          else{
              $scope.message = 'Enter Proper Time';
          }
      }
      else{
          $scope.message = '';
      }
    };
});

app.controller('revStrCtrl',function($scope) {
    $scope.text = null;
    $scope.textStr = null;
    $scope.convertStr = function() {
      var tempStr = '';
      for(var i=$scope.text.length-1; i >=0 ;i--){
          tempStr += $scope.text.charAt(i);
      }
      $scope.textStr = tempStr;
    };
});