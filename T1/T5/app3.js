angular.module('myApp', []);

angular.module('myApp').controller('TemarioController', function($scope){

	$indice = 0;
	
	$scope.temas = [
		{nombre: "Tema 1", items: [{nombre: 'Capitulo 1.1' }, {nombre: 'Capitulo 1.2'}]},
		{nombre: "Tema 2", items: [{nombre: 'Capitulo 2.1' }, {nombre: 'Capitulo 2.2'}]},
	];
});
