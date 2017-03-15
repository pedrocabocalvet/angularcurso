var names = ["Mario", "Patricia", "Manolo", "Santi", "David", "Oscar", "Luis", "Saul", "Autor"];

var elementos = [
		{id: 1, name: 'Elemento 1', color: 'rojo'},
		{id: 2, name: 'Elemento 2', color: 'azul'},
		{id: 3, name: 'Elemento 3', color: 'verde'},
		{id: 4, name: 'Elemento 4', color: 'blanco'}
	];

function getElementos() {
	return elementos;
}

function getNames() {
	return names;
}

function addElement(elemento) {
	elementos.push(elemento);
}

module.exports = {
	getElementos: getElementos,
	getNames: getNames,
	addElement: addElement
}
