// Clase Persona - Representa a una persona individual
export class Cl_persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método para obtener la edad
    getEdad() {
        return this.edad;
    }
    // Método para obtener el nombre
    getNombre() {
        return this.nombre;
    }
}
