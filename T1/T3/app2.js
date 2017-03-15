var app = angular.module('ejercicioApp', []);

app.controller('ejercicioController', function($scope){
	
	$scope.valor = '';

	$scope.entraMouse = function(event) {
		$scope.valor = 'entraMouse';
		console.log('entraMouse');
	};

	$scope.saleMouse = function(event) {
		$scope.valor = 'saleMouse';
		console.log('saleMouse');
	};

	$scope.clickMouse = function(event) {
		$scope.valor = 'clickMouse en x:' + event.clientX + ' e y: ' + event.clientY;
		console.log('clickMouse');
	};

});
