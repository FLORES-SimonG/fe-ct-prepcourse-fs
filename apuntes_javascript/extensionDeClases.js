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

class VendedorDeAutos extends Auto{
    constructor(puertas,color,marca,año,nombreDelVendedor){
        super(puertas,color,marca,año);
        this.nombreDelVendedor=nombreDelVendedor;
    }
    informacionDelResponsable(){
        console.log(`Este es un auto de marca ${this.marca} de color ${this.color} con ${this.puertas} puertas y del año ${this.año} y el responsable de la venta del automóvil es ${this.nombreDelVendedor}`);

    }

}

var vendedor= new VendedorDeAutos(4,'negro','Ford',2023,'Raúl Rodolfo de los Santos Borges');
vendedor.informacionDelResponsable();