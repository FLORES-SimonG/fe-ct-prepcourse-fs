// PRIMERA FORMA DE EXPRESAR FUNCIONES:

function sumaTres1(x){
    return console.log(x+3);
}

//SEGUNDA FORMA:
var sumaTres2 = function(x){
    return console.log(x+3);
}

//TERCERA FORMA:

var sumaTres3 = (x)=>{
    return console.log(x+3);
}


sumaTres1(3);
sumaTres2(3);
sumaTres3(3);