//METODOS:

// array.push()
// array.pop()
// array.unshift()
// array.shift()
// string.split('') --> me lo transforma en una array separada
// string.join('')--> transformo en una array en una string

var numeros =[1,2,3,4];
numeros.forEach((num)=>console.log(num));
numeros.forEach((num)=>{
    if(num===3){
        console.log(num);
    }
})

var masUno=numeros.map((x)=>{
    return x+1;
});
// rta--> [2,3,4,5]


// mas info en : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array