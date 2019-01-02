// Create a Module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function($scope) {
    $scope.theNumber = null;
    $scope.theStrNumber = null;
    $scope.numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    $scope.getStringNumber = function() {
        console.log($scope.theNumber);
        var tempStr = '';
        if($scope.theNumber !== undefined){
            var numStr = $scope.theNumber.toString();
            for(var i = 0; i<numStr.length;i++){
                tempStr += $scope.numberArray[numStr.charAt(i)] + ' ';
            }
            $scope.theStrNumber = tempStr;
        }
        else{
            $scope.theStrNumber = null;
        }
    };
});

app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
    return directive;
});