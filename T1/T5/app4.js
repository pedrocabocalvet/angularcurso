angular.module('myApp', []);

angular.module('myApp').controller('CallbackController', function($scope){

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