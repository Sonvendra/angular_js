// Create a Module
var app  = angular.module('NestedAsApp',[]);

// Create a Parent Controller
app.controller('ParentAsCtrl',function() {
    this.test = null;
});

// Create a Child Controller
app.controller('ChildAsCtrl',function() {
    //this.test = null;
});