// Create a Module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function($scope) {
    $scope.firstNumber = null;
    $scope.secondNumber = null;
    $scope.operator = '+';
    $scope.result = 'RESULT';
    $scope.changeOperator = function(symbol) {
        $scope.operator = symbol;
    };
    $scope.calculate  = function() {
        if($scope.firstNumber !== null && $scope.secondNumber !== null){
            var tempResult  = 0;
            switch($scope.operator){
                case '+':
                    tempResult = $scope.firstNumber + $scope.secondNumber;
                    break;
                case '-':
                    tempResult = $scope.firstNumber - $scope.secondNumber;
                    break;
                case '/':
                    tempResult = $scope.firstNumber / $scope.secondNumber;
                    break;
                case '*':
                    tempResult = $scope.firstNumber * $scope.secondNumber;
                    break;
                default:
                    tempResult = 0;
                    break;
            }
            $scope.result = tempResult;
        }
    };
    $scope.clearAll  = function() {
        $scope.firstNumber = null;
        $scope.secondNumber = null;
        $scope.operator = '+';
        $scope.result = 'RESULT';
    };
});