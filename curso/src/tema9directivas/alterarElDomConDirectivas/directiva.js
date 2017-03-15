
myApp.directive("myDirective",["$http",function($http){

  console.log("llego a la directiva");

  return {

      restrict: 'E',

      // ******** UNA MANERA **************************  de esta manera solo cambio un trozo de codigo html por otro

      // template: '<div>lo cambio desde directiva heredando los atributos q tenia antes</div>',
      // replace: true


      // ******** SEGUNDA MANERA ************************de esta manera lo hacemos insertandole algo de logica y programacion, al final tambien ponemos trozo de codigo directamente

      // template: function(element, attrs){     // recibe como parametros el elemento a cambiar y los atributos de ese elemento
      //     if(attrs.cultura === "es"){   // gracias a q recibe el atributo del elemento podemos hacer programacion por ejemplo asi
      //         return '<div>Cambio en Español</div>';
      //     }else{
      //         return '<div>Change in English</div>';
      //     }
      // },
      // replace: true   // muy importante es el q cambia el template q has hecho por el que hay en el html

      // ********* TERCERA MANERA ********************* gracias a trozos de html q estan en otros lados, ya sea por internet o en otros ficheros, MUY IMPORTANTE es que estas peticiones solo se van ha hacer una vez al exterior, aunque luego se utilizen muchas mas veces solo se va hacer una peticion y se guardara en cache q es donde se reutilizara.

      templateUrl:function(element, attrs){ // es igual q el caso anterior, solo q esta vez consigue el trozo de codigo de otras partes

          if(attrs.cultura==="es"){
            return 'es.html'; // igual q pongo un fichero local podría haber puesto otro de cualquier punto de internet
          }else{
            return 'en.html';
          }

      },
      replace:true

  };

}]);
