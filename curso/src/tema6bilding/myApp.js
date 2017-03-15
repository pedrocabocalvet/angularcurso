

var app = angular.module("myApp",[]);


app.controller("SettingsController1", function($scope){

  $scope.name = "";
  $scope.surname = "";

  $scope.variable = "";


  $scope.fullname = function(){


    $scope.variable = $scope.name + " " + $scope.surname;


  }





});
