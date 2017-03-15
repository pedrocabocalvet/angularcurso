var app = angular.module('app', []);

app.filter('envolver', function($locale) {
	return function(text, caracter){
		return  text + caracter + $locale.id;
	}
});

app.controller('PeliculasController', function($scope, $locale){

	$scope.filtro = '';

	$scope.order = '';
	$scope.reverse = false;

	$scope.peliculas = [
		{name: 'Boyhood', year: 2015, oscar: 'no'},
		{name: 'Birdman', year: 2015, oscar: 'si'},
		{name: 'El gran hotel Budapest', year: 2015, oscar: 'no'},
		{name: '12 años de esclavitud', year: 2014, oscar: 'si'},
		{name: 'Gravity', year: 2014, oscar: 'no'},
		{name: 'Her', year: 2014, oscar: 'no'},
		{name: 'La vida de Pi', year: 2013, oscar: 'no'},
		{name: 'Django Desencadenado', year: 2013, oscar: 'no'},
		{name: 'Argo', year: 2013, oscar: 'si'},
		{name: 'Lincoln', year: 2013, oscar: 'no'}
	];

	$scope.selectOrder = function(field){
		$scope.reverse = ($scope.order === field) ? !$scope.reverse : false;
		$scope.order = field;
	}

});
