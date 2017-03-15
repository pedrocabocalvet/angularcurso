app.provider("myProvider", function(){

  var texto = "hola desde provider";

  var defaultText = "Hello Wold from Provider!!!";
  var text = defaultText;

  // este setter lo tocare desde config dependendiendo lo que sea la variable culture dentro de myCulture.js

  this.setCulture = function(culture) {
    (culture === 'es') ? text = "Hola Mundo desde Provider!!!":defaultText;
  };


  this.$get = ['$http' , function($http){

        console.log(text);


        // aqui cojo el jason y lo guardo en usuarios, no hace falta declarar variables en javascript
          usuarios = $http.get('https://www.w3schools.com/angular/customers.php');

          // pasas clave valor es como un jason indice usuarios : valor de la variable usuarios
          return {usuarios:usuarios};


  }];

});
