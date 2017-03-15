
app.service("myService",function(){

  var text = "Hola desde myService";

  this.write = function(){
    console.log(text);
  };

});
