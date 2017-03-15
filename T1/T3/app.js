var app = angular.module('ejercicioApp', []);

app.controller('ejercicioController', function($scope){
	
	$scope.operando1 = 0;
	$scope.operando2 = 0;
	$scope.valores = [1, 2, 3, 4, 5];
	
	$scope.sumar = function() {
		return $scope.operando1 + $scope.operando2;
	};



});
