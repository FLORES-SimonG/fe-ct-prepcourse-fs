var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };


console.log(persona.nombre);

//modificar algun factor
persona.nombre;

console.log(persona.nombre);

//crear una key y valor:

persona.apellido=['Rosa','Perez','Torillo'];
console.log(persona.apellido);

//eliminar propiedad del objeto:

delete persona.apellido;
console.log(persona);

//poner una función dentro:
var miFuncion = {saludar:
function(){
    console.log('hola');
}};

miFuncion.saludar();


// nomenclatura:

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);




//manejo de objetos:

var libro={
    autor:'Borges',
    genero:'Policial', 
    año:1999
}
//HasOwnProperty --> validar información
var tieneLaPropiedad= libro.hasOwnProperty('nombre');

console.log(tieneLaPropiedad);

//guardar todas las propiedades en una array:
var todasLasPropiedades=Object.keys(libro);
console.log(todasLasPropiedades);

//RECORRER DENTRO DEL OBJETO: FOR IN

for (var i in libro){
    console.log('Esta es la propiedad/key: ' + i);
    console.log('Este es el valor dentro de ella: ' + libro[i]); //no funciona con "libro.i"
}



//EL USO DE THIS:

libro.info= function(){console.log('Mi autor favorito es '+ libro.autor)}

libro.info();

console.log(libro);


//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };



 objetoProducto.calcularPrecioDescuento = function(){ 
    return this.precio - (this.precio * this.porcentajeDeDescuento); 
 };
    return objetoProducto;