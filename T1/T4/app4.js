angular.module('app', []);

angular.module('app').controller('ejercicioController', function($scope){
	$scope.name = "";
	$scope.bienvenido = '';

	$scope.$watch('name', function(newValue, oldValue) {
		if(newValue.length >= 3){
	  		$scope.bienvenido = 'Bienvenido ' + newValue;
		}else{
			$scope.bienvenido = '';
		}
	});

});



