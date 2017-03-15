angular.module('app', []);

angular.module('app').controller('FlechasController', function($scope, $element){
	$scope.mensaje = "Pulsa alguna de las flechas";

	$element.bind('keyup', function (event) {
		if (event.keyCode === 37) { // flecha izquierda
			$scope.$apply(function() {
				$scope.mensaje = 'Hemos pulsado la flecha izquierda';
			});
		}else if (event.keyCode === 38){ // flecha arriba
			$scope.$apply(function() {
				$scope.mensaje = 'Hemos pulsado la flecha arriba';
			});
		}else if (event.keyCode === 39){ // flecha derecha
			$scope.$apply(function() {
				$scope.mensaje = 'Hemos pulsado la flechaderecha';
			});
		}else if (event.keyCode === 40){ // flecha abajo
			$scope.$apply(function() {
				$scope.mensaje = 'Hemos pulsado la flecha abajo';
			});
		}
	});
});



