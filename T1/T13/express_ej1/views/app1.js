var app = angular.module('app', []);

app.factory('Item', function(filterFilter, $http){
	var elementos = [
		{id: 1, name: 'Elemento 1', color: 'rojo'},
		{id: 2, name: 'Elemento 2', color: 'azul'},
		{id: 3, name: 'Elemento 3', color: 'verde'},
		{id: 4, name: 'Elemento 4', color: 'blanco'}
	];

	return{
		getElementos: function(){
			$http.get("http://localhost:3000/list")
				.then(function(response){
					return response;
				}, function(response){
					alert("Error");
				});
		},
		add: function(item){
			elementos.push(item);
		},
		size: function(){
			return elementos.length;
		}
	}
});

app.controller('ItemsController', function($scope, $rootScope, $location, $routeParams, Item) {
	$scope.items = Item.getElementos();

	$scope.newId = '';
	$scope.name = '';
	$scope.color = '';

	$scope.addItem = function(){
		$scope.newId = Item.size() + 1;
		Item.add({id: $scope.newId, name: $scope.name, color: $scope.color});
	}
});

