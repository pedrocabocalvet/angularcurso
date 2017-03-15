myApp.directive("mySelect",["$http",function($thttp){

    console.log("mi directiva");

    return {

        restrict: "E",

        template: function(element, attrs){     // recibe como parametros el elemento a cambiar y los atributos de ese elemento
            return '<select name="repeatSelect" id="repeatSelect" ng-model="'+attrs.model+'"><option ng-repeat="user in '+attrs.collection+'" value="{{user}}">{{user}}</option></select>';
          
        },
        replace: true   // muy importante es el q cambia el template q has hecho por el que hay en el html


    }



}]);
