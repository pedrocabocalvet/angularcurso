

var app = angular.module("myApp",[]);


app.controller("SettingsController1", function($scope){

  $scope.variable = "hola";


  $scope.escribirHolaMundo = function(){


      console.log("hello world");


  }

// var foo = function(arg1, arg2) {};    crea en consola la funcion

// var injector = angular.element($0).injector();   guarda en la variable el injector

// injector.annotate(foo);    mete en el injector la funcion creada

// foo.$inject;   enseña los parametros introducidos

});
