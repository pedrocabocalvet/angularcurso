angular.module('app', []);

angular.module('app', []);

angular.module('app').controller('SumaControlador', function($scope){
	$scope.valores = [1,2];
	$scope.valorNuevo = 1;

	$scope.agregar = function(){
		$scope.valores.push(parseInt($scope.valorNuevo));
	}

	$scope.$watch('valores', function (){
		$scope.sum = $scope.valores.reduce(function(a,b){
		return a + b;
	});
	}, true);
});


