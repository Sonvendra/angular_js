// Create a Module
var app = angular.module('ClockApp',[]);

// Create a Controller
app.controller('ClockAppCtrl',function($scope,$interval) {

    // Indian Clock
    $scope.indianClock = function() {
      var today = new Date();
      var options = {timeZone : 'Asia/Kolkata'};
      $scope.indianTime = today.toLocaleTimeString('en-US',options);
      $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval($scope.indianClock,1000);

    // USA Clock
    $scope.USAClock = function() {
        var today = new Date();
        var options = {timeZone : 'America/New_York'};
        $scope.usaTime = today.toLocaleTimeString('en-US',options);
        $scope.usaDate = today.toLocaleDateString('en-US',options);
    };
    $interval($scope.USAClock,1000);

    // China Clock
    $scope.chinaClock = function() {
        var today = new Date();
        var options = {timeZone : 'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval($scope.chinaClock,1000);
});