var myApp = angular.module("myApp",[]);

myApp.controller("controlador",function($scope){

    $scope.variable = "hola pepe";

    $scope.holaMundo = function(){
      console.log("hola mundo");
    };


});
