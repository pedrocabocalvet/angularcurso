var app = angular.module('helloWorldApp', []);

app.controller('HelloController', function($scope){


	$scope.avgArray = [];

	$scope.cargarValores = function(){
		var max = 5;
		var total = 0;

		var array = [];

		for(var i = 0; i < max; i++){
			var num = prompt('Introduce un número');
			$scope.avgArray.push(parseInt(num));
		};


	};

	$scope.obtenerMedia = function(){
		var total = 0;

		for(var i = 0; i < $scope.avgArray.length; i++){
			total += $scope.avgArray[i];
		};

		return  total / $scope.avgArray.length;
	};
	

});
