var app = angular.module('myApp', []);

app.service('MathService', function(){
	this.suma = function(a, b){
		return a + b;
	};
	this.resta = function(a, b){
		return a - b;
	};
	this.multiplicacion = function(a, b){
		return a * b;
	};
	this.division = function(a, b){
		return a / b;
	};
});

app.factory('MathServiceFactory', function(MathService){
	var factory = {};

	factory.getResultado = function(v1, op, v2){
		switch(op){
			case '+':
				return MathService.suma(v1, v2);
			break;
			case '-':
				return MathService.resta(v1, v2);
			break;
			case 'x2':
				return MathService.multiplicacion(v1, v1);
			break;
			case 'x3':
				var cubo = MathService.multiplicacion(v1, v1);
				return MathService.multiplicacion(cubo, v1);
			break;
		}
	};

	return factory;
});


app.controller('CalculadoraController', function($scope, MathServiceFactory){

	$scope.num = 1;
	$scope.resultado = 1;
	$scope.messageError = null;

	$scope.v1 = null;
	$scope.op = null;
	$scope.v2 = null;

	$scope.disableBtResult = true;
	$scope.disableAllBt = false;
	
	$scope.asignarOperando = function (op){
		if($scope.num < 0){
			$scope.num = 1;
			$scope.messageError = 'No se pueden insertar negativos';
		}else{

			$scope.op = op;
			$scope.v1 = $scope.num;
			$scope.disableBtResult = false;

			if($scope.op === 'x2' || $scope.op === 'x3'){
				$scope.calcularResultado();
			}
		}
	};

	$scope.calcularResultado = function (){
		if($scope.op !== 'x2' && $scope.op !== 'x3'){
			$scope.v2 = $scope.num;
		}
		$scope.resultado = MathServiceFactory.getResultado($scope.v1, $scope.op, $scope.v2);
		$scope.disableBtResult = true;
		$scope.disableAllBt = true;
	};

	$scope.clear = function (){
		$scope.v1 = 0;
		$scope.op = '';
		$scope.v2 = 0;
		$scope.disableBtResult = true;
		$scope.disableAllBt = false;
		$scope.resultado = 1;
		$scope.messageError = null;
	};
	
});

