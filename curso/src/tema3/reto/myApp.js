

var app = angular.module("myApp",[]);


app.controller("SettingsController1", function($scope){

  $scope.variable = "hola";


  $scope.escribirHolaMundo = function(){


      console.log("hello world");


  }



});
