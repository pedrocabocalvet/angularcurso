var app = angular.module("myApp",[]);

app.controller("SettingsController1", ["$scope","myProvider","myService","myFactory",function($scope,myProvider,myService,myFactory){

  myService.write();
  myFactory.write();


  myProvider.usuarios.success(function(data){
    // data era lo q devolvia el http de provider q es un promise, entonces podemos hacer un success y dentro del data venia un array de objetos llamado records q es el q recuperamos con
    // data.records, success es cuando todo ha ido bien, y error es cuando ha habido algun error
    console.log(data.records);

    $scope.variableUsuarios = data.records;
  }).error(function(data){
    console.log("error");
  })

}]);
