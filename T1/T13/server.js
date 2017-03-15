var http = require("http");
var url = require("url");
var operaciones = require('./operaciones');

var server = http.createServer(function (peticion, respuesta){
	//TODO Comprobar la ruta introducida para saber de qué función se trata.
	//TODO Obtener primer argumento.
	//TODO Obtener segundo argumento.

	var pathname = url.parse(peticion.url, true).pathname;
	var num1 = url.parse(peticion.url, true).query.numero1;
	var num2 = url.parse(peticion.url, true).query.numero2;

	//TODO Escribir la cabecera de la respuesta.
	respuesta.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

	//TODO Comprobar de qué función se trata para realizar la operación correspondiente.
	if (pathname == "/suma") {
		respuesta.write(num1 + "+" + num2 + " = " + operaciones.suma(num1, num2));
	} else if(pathname == "/resta"){
		respuesta.write(num1 + "-" + num2 + " = " + operaciones.resta(num1, num2));
	} else if(pathname == "/mult"){
		respuesta.write(num1 + "*" + num2 + " = " + operaciones.mult(num1, num2));
	} else if(pathname == "/div"){
		respuesta.write(num1 + "/" + num2 + " = " + operaciones.div(num1, num2));
	}

	//TODO Escribir la respuesta que devolverá cada operación.
	respuesta.end();
});

server.listen(3000, function(){
	console.log("tu servidor está listo en " + this.address().port);
});

