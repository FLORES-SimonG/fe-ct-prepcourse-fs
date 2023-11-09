//funcion constructora y expresion de clase son las formas de crear:

//al principio usaban la función constructora

//FUNCIÓN CONSTRUCTORA:
// function Auto(puertas,color,marca,año){
//     this.puertas=puertas;
//     this.color=color;
//     this.marca=marca;
//     this.año=año;
// }

// var miPrimerAuto= new Auto(2,'rojo','Ferrari',2023);

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);


//ECMA 2015: EXPRESIÓN DE CLASE:

class Auto{
    constructor(puertas,color,marca,año){
        this.puertas=puertas;
        this.color=color;
        this.marca=marca;
        this.año=año;
    }
    informacion(){
        console.log(`Este es un auto de marca ${this.marca} de color ${this.color} con ${this.puertas} puertas y del año ${this.año}`)
    }

}


var miSegundoAuto= new Auto(4,'Blanco','Fiat',2006);
console.log(miSegundoAuto);

miSegundoAuto.informacion();