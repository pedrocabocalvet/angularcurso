var app = angular.module('myApp', []);

app.value('contador', {num: 0});

app.controller('ContadorController', function($scope, contador){
	$scope.cont = contador;
	
	$scope.incrementarContador = function (){
		$scope.cont.num++;
	}
});

app.controller('Contador2Controller', function($scope, contador){
	$scope.cont = contador;
	
	$scope.incrementarContador = function (){
		$scope.cont.num++;
	}
});

