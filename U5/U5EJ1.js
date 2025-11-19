//T3: Primeros pasos con JavaScript en una aplicación web / Primers passos amb JavaScript en una aplicació web
//U5: Almacenamiento local mediante local storage / Emmagatzemament local mitjançant local storage
/** 
  -- CASTELLANO
  -- EJERCICIO 3.5.1 ENUNCIADO: 
	El código dado almacena en el localStorage en el valor asociado a la clave "myTriangles", un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Triangle,
	(vista en el ejercicio 2.5.3), con esta premisa se nos pide:
	- Definir en una constante denominada myTriangles un Array de objetos Triangle a partir de este texto (obteniéndolo desde el localStorage).
	- Eliminar el último de los triángulos de este nuevo Array.
	- Pasar este Array (ya modificado sin el último triángulo) al localStorage donde se encontraba originalmente, en la clave "myTriangles".
*/

localStorage.setItem(
	"myTriangles",
	'[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]'
	);

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// Obtenemos el JSON string del localStorage.
const trianglesJSON = localStorage.getItem("myTriangles");

// Definimos en una constante denominada myTriangles un Array de objetos Triangle.
// Parseamos el JSON string a un Array de objetos planos.
const myTriangles = JSON.parse(trianglesJSON);

// Comprobación: Mostrar el array original
console.log("Array original (3 triángulos):", myTriangles);

// Eliminamos el último de los triángulos de este nuevo Array.
// El método 'pop()' elimina el último elemento y lo devuelve (pero no necesitamos el valor devuelto).
myTriangles.pop();

// Comprobación: Mostrar el array modificado
console.log("Array modificado (2 triángulos):", myTriangles);

// Pasamos este Array modificado) al localStorage.
//    a. Convertimos el Array de objetos de nuevo a un string en formato JSON.
const modifiedTrianglesJSON = JSON.stringify(myTriangles);

//    b. Guardamos el nuevo string JSON en la clave "myTriangles".
localStorage.setItem("myTriangles", modifiedTrianglesJSON);

// Comprobación: Verificar el contenido del localStorage
console.log("Contenido final en localStorage:", localStorage.getItem("myTriangles"));

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
	return [myTriangles, localStorage.getItem("myTriangles")];
}