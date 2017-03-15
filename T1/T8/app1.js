var app = angular.module('app', []);

app.value('porcentajeDescuento', 0.8);

app.factory('calculoDescuento', function(porcentajeDescuento){
	return function(numero){
		return parseInt(numero) * porcentajeDescuento;
	};
});

app.directive('mensaje', function(){
	return function(scope, element, attrs){
		var opciones = scope.$eval(attrs.mensaje);
		var resultado = opciones.caracter + opciones.texto + opciones.caracter;
		element.text(resultado);
	}
});

app.directive('eliminaLetra', function(){
	return function(scope, element, attrs){
		var letra = attrs.eliminaLetra;
		var resultado = element.text().replace(letra,'');

		element.text(resultado);
	}
});

app.directive('descuento', function(calculoDescuento){
	return function(scope, element, attrs){
		var precio = scope.$eval(attrs.descuento);
		var precioDescuento = calculoDescuento(precio);
		element.html(precioDescuento);
	}
});

app.directive('factorial', function(){
	return {
	    restrict: 'E',
	    template:"	{{result}}",
	    link: function (scope, element, attrs) {
	      	var numero = scope.$eval(attrs.numero);
			scope.result = 1;

			for(var i = numero; i > 0; i--){
				scope.result = scope.result * i;
			}
	    }
	 };
});

app.directive('listarTareas', function() {
	return{
		restrict: 'E',
	  	template:"<li ng-repeat='tarea in tareas'>\
	               <input type='checkbox' ng-model='tarea.isDelete'> {{tarea.desc}}\
	            </li>"
	};
});

app.controller('ejerciciosController', function($scope, $locale){
	

	$scope.tareas = [
				{id: 1, desc: "Hacer la compra", isDelete: false},
				{id: 2, desc: "Sacar al perro", isDelete: false},
				{id: 3, desc: "Recoger la ropa", isDelete: false},
				{id: 4, desc: "Arreglar ordenador", isDelete: false}
			];

	$scope.description = '';

	$scope.eliminarTarea = function(item){
		var index = $scope.tareas.indexOf(item);
    	$scope.tareas.splice(index, 1);
	};

	$scope.eliminarTareas = function(){

		for (var i = $scope.tareas.length - 1; i >= 0 ; i--) { 
			if($scope.tareas[i].isDelete){
				$scope.eliminarTarea($scope.tareas[i]);
			}
		}
		
	};

	$scope.addTarea = function(){
		if($scope.description !== ''){
			var newValue = {id: 1, desc: $scope.description, isDelete: false};
	    	$scope.tareas.push(newValue);
	    	$scope.description = '';
    	}
	};

});
