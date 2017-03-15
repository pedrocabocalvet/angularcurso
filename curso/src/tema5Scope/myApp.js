
var app = angular.module("myApp",[]);


// aqui le inyecto las dependencias de su scope y del scope padre de los dos y lanzo el mensaje broadcast desde el padre
app.controller("SettingsController1",["$scope","$rootScope",function($scope,$rootScope){

  $scope.variable = "pepepepe";

  $scope.myClick = function(){

      $rootScope.$broadcast("f2");

  }




}]);


app.controller("SettingsController2",function($scope){


    $scope.$on("f2",function(){
      $scope.text = "controlador2";
      console.log("me ha llamado controlador1");
    });



});
