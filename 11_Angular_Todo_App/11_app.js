// Create a Module
var app = angular.module('TodoApp',[]);

// Create a Controller
app.controller('TodoAppCtrl',function($scope) {
    $scope.groceryItem = null;
    $scope.groceryItems = [];
    $scope.editMode = false;
    $scope.addGroceryItem = function() {
        if($scope.groceryItem !== null){
            // If Item Not Exists
            if($scope.groceryItems.indexOf($scope.groceryItem.toUpperCase()) === -1){
                $scope.groceryItems.push($scope.groceryItem.toUpperCase());
                $scope.groceryItem = null;
            }
            else{
                alert('Dude The ' + $scope.groceryItem + ' is Already Exists');
                $scope.groceryItem = null;
            }
        }
        else{
            alert('Dude!! Enter at least One Item');
        }
    };
    $scope.ONEditMode = function() {
        $scope.editMode = true;
    };
    $scope.OFFEditMode = function() {
        $scope.editMode = false;
    };
    $scope.deleteGroceryItem = function(index) {
        $scope.groceryItems.splice(index,1);
    };
    $scope.replaceGroceryItem = function(index,replaceItem) {
      $scope.groceryItems.splice(index,1,replaceItem);
    };
});