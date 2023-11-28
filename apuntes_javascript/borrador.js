// var objeto = {D: 1, B: 2, C: 3};
// var array=[];
// for (var i in objeto){
//   array.push([i,objeto[i]])
// }
// console.log(array);



// var string = "adsjfdsfsfjsdjfhacabcsbajda";
// var arrayDeLetras = string.split('').sort();
// var resultado = {};
// var suma = 1;

// for (var i = 0; i < arrayDeLetras.length; i++) {
//   arrayDeLetras[i] == arrayDeLetras[i + 1] ? suma++ : (resultado[arrayDeLetras[i]] = suma, suma = 1);
// }

// console.log(resultado);



// var string= 'soyHENRY'
// var arrayMayus=[];
// var arrayMinus=[]
// var resultado;
// for (i=0; i<string.length;i++){
//   string[i]==string[i].toUpperCase()?arrayMayus.push(string[i]):arrayMinus.push(string[i]);
// }
// resultado=arrayMayus.join('')+arrayMinus.join('');
// console.log(resultado);


// var string= "The Henry Challenge is close!" // ---> "ehT yrneH egnellahC si !esolc"

// var arrayStringModif = string.split(' ');
// var nuevaArray=[];
// for (i in arrayStringModif){
//   nuevaArray[i]=arrayStringModif[i].split('').reverse().join('')
// }

// console.log( nuevaArray.join(' '));

// var numero=5551555
// var array=[];
//   var string=numero.toString();
//   for (i=0; i<string.length;i++){
//     string.startsWith([i+0])==string.endsWith([i+0])?true:array.push('x')
//   }
//   console.log( array.length!==0?'No es capicua':'Es capicua');


// var string= 'Me llamo Juan Cruz de la Vega';

// var array=[];

// for (i=0;i<string.length;i++){
//   string[i].includes('a') || 
//   string[i].includes('e') || 
//   string[i].includes('c') ? true:array.push(string[i]);
// }

// console.log(array.join(''));

// console.log(string.replace(/[abCc]/g, ''));


// arr1=[27,0,7,2,3];
// arr2=[4,5,0,7,1,2];
// arrNuevo=[];

// arrT=arr1.concat(arr2).sort((a,b)=>{return a-b});
// for (i=0;i<arrT.length;i++){
//   arrT[i]==arrT[i+1]?arrNuevo.push(arrT[i]):true;
// }

// console.log(arrNuevo);
