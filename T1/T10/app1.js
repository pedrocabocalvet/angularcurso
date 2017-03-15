var app = angular.module('app', ['ngMap']);

app.factory('Tiempo', function($http){
	return{
		getTiempo: function(ciudad){
			return $http.get("http://api.openweathermap.org/data/2.5/weather?q="+ciudad+",es&units=metric&lang=es&APPID=1589ca469a650d89f16078449997dcef");
		}
	}
});

app.controller('TiempoController', function($scope, Tiempo){
	$scope.ciudad = "Valencia";

	$scope.tempMax;
	$scope.icono;
	$scope.description;
	$scope.latitud;
	$scope.longitud;

	$scope.showMap = false;

	$scope.getTiempo = function(){
		$scope.estado = "Cargando...";

		Tiempo.getTiempo($scope.ciudad)
		.then(function(response){
			//función que se ejecuta cuando recibimos datos
			$scope.tempMax = parseInt(response.data.main.temp_max);
			$scope.icono = response.data.weather[0].icon;
			$scope.description = response.data.weather[0].description;
			$scope.latitud = response.data.coord.lat;
			$scope.longitud = response.data.coord.lon;
			$scope.showMap = true;

		}, function(response){
			//función que se ejecuta cuando obtenemos error
			alert("Error");
		});
	};

});


