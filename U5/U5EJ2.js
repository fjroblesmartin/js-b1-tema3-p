//T3: Primeros pasos con JavaScript en una aplicación web / Primers passos amb JavaScript en una aplicació web
//U5: Almacenamiento local mediante local storage / Emmagatzemament local mitjançant local storage
/** 
  -- CASTELLANO
  -- EJERCICIO 3.5.2 ENUNCIADO: 
	El código dado almacena en el localStorage en el valor asociado a la clave "myTriangles", un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Triangle,
	(vista en el ejercicio 2.5.3), con esta premisa se nos pide:
	- Definir en una constante denominada myTriangle el valor del primer objeto Triangle que se encuentra definido en este texto (obteniéndolo desde el localStorage).
	- Modificar el valor de la propiedad rightTriangle de este nuevo objeto myTriangle, de manera que ahora sea false.
	- Pasar este nuevo objeto (ya modificado) al sessionStorage en la clave "newTriangle".
*/

localStorage.setItem(
	"myTriangles",
	'[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]'
	);

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// Obtenemos el texto JSON del localStorage y convertirlo en un Array de objetos JavaScript.
const trianglesJSON = localStorage.getItem("myTriangles");
const trianglesArray = JSON.parse(trianglesJSON);

// Definimos la constante myTriangle con el valor del primer objeto Triangle.
const myTriangle = trianglesArray[0];

// Modificamos la propiedad rightTriangle del objeto myTriangle a false.
myTriangle.rightTriangle = false;

// Pasamos este nuevo objeto modificado al sessionStorage en la clave "newTriangle".
// Primero, convertimos el objeto de nuevo a una cadena JSON para almacenarlo.
const newTriangleJSON = JSON.stringify(myTriangle);
sessionStorage.setItem("newTriangle", newTriangleJSON);

// comprobación
console.log("Objeto myTriangle modificado:", myTriangle);
console.log("Valor en sessionStorage (newTriangle):", sessionStorage.getItem("newTriangle"));



/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
	return [myTriangle, sessionStorage.getItem("newTriangle")];
}