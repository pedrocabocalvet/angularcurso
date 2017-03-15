var app = angular.module('helloWorldApp', []);
app.controller('HelloController', function($scope){
$scope.saludo = {text: 'Hola'};
});
