var app = angular.module('ejercicioApp', []);

app.controller('ejercicioController', function($scope){
	$scope.apples = 1;
	$scope.checkValue1 = false;
	$scope.checkValue2 = '';
	$scope.pais = '';
	$scope.pais2 = '';
	$scope.disableRadio = true;

	$scope.isMayor = function(num){
		return $scope.apples > num;
	}


});
