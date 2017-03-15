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

app.service('CalculadoreService', function(MathService){
	this.elevarCuadrado = function(num){
		return MathService.multiplicacion(num, num);
	};
	this.elevarCubo = function(num){
		var cubo = MathService.multiplicacion(num, num);
		return MathService.multiplicacion(cubo, num);
	};
});


app.controller('CalculadoraController', function($scope, CalculadoreService){

	$scope.num = 1;
	$scope.respuesta = 1;
	
	$scope.calcularCuadrado = function (){
		$scope.respuesta = CalculadoreService.elevarCuadrado($scope.num);
	};

	$scope.calcularCubo = function (){
		$scope.respuesta = CalculadoreService.elevarCubo($scope.num);
	};
	
});

