
// nombre de la directiva, al ser camerCase ese elemento se representara en el html asi <my-directive></my-directive>, hay q inyectarle el $http
myApp.directive("myDirective",["$http",function($http){

  // esto solo lo ejecutara una vez pq las directivas son singleton osea q solo se crea una vez, por eso esto solo lo hace una vez, aunque tenga 20 etiquetas <my-directive>
  console.log("mi directiva");

// lo de aqui dentro si q se ejecutara cada vez q sea llamado por un elemento no como lo de arriba
  return {

    // todo lo que haya aqui dentro se le llama DDO

      restrict: 'E',  // esto hace relacion a donde esta la directiva, E elemento, A atributo, C clase, M comentario
      link:function(){  // No inyectable (Scpope, element, attributes, ...) parametros q recibe, sirve para suscribirse a eventos

        console.log("estoy en la funcion link");
        console.log(arguments);   // argumnets devuelve los parametros q se le pasan a la funcion link, que son : scope, element, atributos(q haya en el html)

      },
      compile:function(){ //cuando haga compile no hara el link. no inyectable (element, attributes) creo q es para manipular el DOM
        console.log("estoy en la funcion compile");
        console.log(arguments); // devuelve los parametros q se le pasan a la funcion compile q son : element y attributes.

            return function() { // si quieres hacer la funcion link pero has hecho compile tienes q hacerlo dentro de compile y se hace con este return q devuelve la funcion link
                console.log("funcion link desde compile");
                console.log(arguments);
            };

      }



  };


}]);
