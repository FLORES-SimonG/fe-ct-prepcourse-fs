Array.prototype.mayoresQueTres=function(){
    var arregloModificado=[];
    for (let i=0;i<this.length;i++){//this hace referencia al ARREGLO EN CUESTIÓN
        this[i]>3?arregloModificado.push(false):arregloModificado.push(this[i]);
    }
    return arregloModificado;
}


var arreglo=[1,2,3,4,5];

var nuevoArreglo=arreglo.mayoresQueTres();
console.log(nuevoArreglo);


class Latinoamerica{
    constructor(){
        this.paises=[];
    }
}

Latinoamerica.prototype.agregarPais= function(pais){
    this.paises.push(pais);

}
var continente = new Latinoamerica();
continente.agregarPais('México');
console.log(continente.paises);