app.factory("myFactory",function(){

  var text = "hola desde myFactory";

  return{

// write: es algo como clave valor, para hacer referencia a esta funcion bastara con llamar a write
    write: function(){
      console.log(text);
    }

  }

});
