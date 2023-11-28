/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array=[];
   for (var i in objeto){
      array.push([i,objeto[i]])
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
var arrayDeLetras = string.split('').sort();
var resultado = {};
var suma = 1;
for (var i = 0; i < arrayDeLetras.length; i++) {
   arrayDeLetras[i] == arrayDeLetras[i + 1] ? suma++ : (resultado[arrayDeLetras[i]] = suma, suma = 1);
}
return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayMayus=[];
   var arrayMinus=[]
   var resultado;
   for (i=0; i<string.length;i++){
      string[i]==string[i].toUpperCase()?arrayMayus.push(string[i]):arrayMinus.push(string[i]);
   }
   resultado=arrayMayus.join('')+arrayMinus.join('');
   return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayStringModif = frase.split(' ');
   var nuevaArray=[];
   for (i in arrayStringModif){
      nuevaArray[i]=arrayStringModif[i].split('').reverse().join('')
   }
   
   return nuevaArray.join(' ');
   }

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var array=[];
   var string=numero.toString();
   for (i=0; i<string.length;i++){
      string.startsWith([i+0])==string.endsWith([i+0])?true:array.push('x')
   }
   return array.length!==0?'No es capicua':'Es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

var array=[];

for (i=0;i<string.length;i++){
   string[i].includes('a') || 
   string[i].includes('b') || 
   string[i].includes('c') ? true:array.push(string[i]);
}

return(array.join(''));

//return(string.replace(/[abCc]/g, '')); aca uso lo que aprendi en Platzi que son las expresiones regulares.

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b)=>{return a.length-b.length});
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   arrT=array1.concat(array2).sort((a,b)=>{return a-b});
   var arrNuevo=[];
   for (i=0;i<arrT.length;i++){
      arrT[i]==arrT[i+1]?arrNuevo.push(arrT[i]):true;
   }

   return(arrNuevo);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
