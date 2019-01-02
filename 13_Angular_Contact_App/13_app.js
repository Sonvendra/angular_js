// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = null;
    $scope.selectedContact = null;
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/1c63ef581c7088d4c39e61b081910c20/raw/dfe912428569106e8ad5f2dda65998e7ac761cf1/03122018.json').then(function(response) {
        $scope.contactList = response.data.contacts;
    });
    $scope.selectAContact = function(index) {
        $scope.selectedContact = $scope.contactList[index];
    };
});